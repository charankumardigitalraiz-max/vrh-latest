const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const sourceDir = path.join(__dirname, 'old_static');
const outputDir = path.join(__dirname, 'src', 'data');
const outputFile = path.join(outputDir, 'products.json');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.html'));
const corePages = ['index.html', 'about-us.html', 'careers.html', 'contact-us.html', 'gallery-2.html', 'quality-policy.html', 'testimonials.html', 'sheep-goat.html', 'large-animals.html', 'canine.html', 'aquaculture.html', 'poultry.html'];

const products = [];
const categories = {
  poultry: { name: 'Poultry', products: [] },
  aquaculture: { name: 'Aquaculture', products: [] },
  'large-animals': { name: 'Large Animals', products: [] },
  canine: { name: 'Canine', products: [] },
  'sheep-goat': { name: 'Sheep & Goat', products: [] }
};

files.forEach(file => {
  if (corePages.includes(file)) return;

  const html = fs.readFileSync(path.join(sourceDir, file), 'utf8');
  const $ = cheerio.load(html);

  const slug = file.replace('.html', '');
  const title = $('.entry-title').text().trim() || $('.rt-section-title-vc').text().trim();
  const subtitle = $('.wpb_text_column h3').first().text().trim();
  
  // Extract Image
  let image = '';
  $('.vc_single_image-img').each((i, el) => {
    const src = $(el).attr('src');
    if (src && !src.includes('no_image') && !src.includes('pdf-4060fc4c.svg')) {
      image = src.replace('./', '/');
    }
  });

  // Extract Tabs
  const tabs = {};
  $('.vc_tta-panel').each((i, el) => {
    const tabTitle = $(el).find('.vc_tta-title-text').text().trim();
    if (tabTitle && tabTitle !== 'Gallery') {
      tabs[tabTitle.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_')] = {
        title: tabTitle,
        content: $(el).find('.vc_tta-panel-body').html().trim()
      };
    }
  });

  products.push({
    slug,
    title,
    subtitle,
    image,
    tabs
  });
});

// Link products to categories (simple heuristic or by parsing category pages)
// For now, I'll parse the category pages to be precise
['poultry', 'aquaculture', 'large-animals', 'canine', 'sheep-goat'].forEach(cat => {
  const catFile = path.join(sourceDir, `${cat}.html`);
  if (fs.existsSync(catFile)) {
    const html = fs.readFileSync(catFile, 'utf8');
    const $ = cheerio.load(html);
    $('a').each((i, el) => {
      const href = $(el).attr('href');
      if (href && href.endsWith('.html') && !corePages.includes(href)) {
        const prodSlug = href.replace('.html', '');
        if (!categories[cat].products.includes(prodSlug)) {
          categories[cat].products.push(prodSlug);
        }
      }
    });
  }
});

const data = { products, categories };
fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
console.log(`Extracted ${products.length} products into ${outputFile}`);
