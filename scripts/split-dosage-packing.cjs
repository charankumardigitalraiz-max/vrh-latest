/**
 * One-time migration script:
 * For every product whose dosage tab content contains a Packing / Presentation paragraph,
 * split it into two separate tab entries:
 *   dosage  → title: "Direction of Use"
 *   packing → title: "Packing"
 *
 * Run with: node scripts/split-dosage-packing.js
 */

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/data/products.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Matches the opening of a <p> that starts the Packing / Presentation section.
// Handles variations like:
//   <p><strong>Packing:</strong>
//   <p><strong><u>Packing:</u></strong>
//   <p><strong><u>Presentation:</u></strong>
//   <p>  <strong>Packing: </strong>
const SPLIT_RE = /<p[^>]*>\s*(?:<(?:strong|u|b)[^>]*>\s*)*(?:Packing|Presentation)\s*:?\s*(?:<\/(?:strong|u|b)>)*/i;

let modified = 0;

data.products = data.products.map(product => {
  const d = product.tabs?.dosage;
  if (!d) return product;

  const html = d.content || '';
  const match = SPLIT_RE.exec(html);

  if (!match) {
    // No packing info found — just rename title if it looks like "Dosage & Packing"
    if (/packing/i.test(d.title)) {
      product.tabs.dosage = { title: 'Direction of Use', content: html };
      modified++;
    }
    return product;
  }

  const splitAt = match.index;

  // Everything before the packing paragraph → Direction of Use
  const dosageHtml = html.substring(0, splitAt).trimEnd();

  // The packing paragraph and anything after it → Packing
  const packingHtml = html.substring(splitAt).trim();

  product.tabs.dosage = {
    title: 'Direction of Use',
    content: dosageHtml,
  };

  product.tabs.packing = {
    title: 'Packing',
    content: packingHtml,
  };

  modified++;
  return product;
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log(`✅  Done. ${modified} product(s) updated.`);
