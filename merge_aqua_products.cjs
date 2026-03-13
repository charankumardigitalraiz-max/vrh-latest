const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE = path.join(__dirname, 'src', 'data', 'products.json');
const NEW_DATA_FILE = path.join(__dirname, 'public', 'final_aquaculture_products.json');

let existingProductsData = { products: [] };
try {
  existingProductsData = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8'));
} catch (e) {
  console.error("Could not read existing products.json");
}

let newData = { products: [] };
try {
  newData = JSON.parse(fs.readFileSync(NEW_DATA_FILE, 'utf8'));
} catch (e) {
  console.error("Could not read new data file.");
}

function normalizeTitle(title) {
  return (title || "").toString().toLowerCase().replace(/[\s\-\_\(\)&]/g, '');
}

function generateSlug(title) {
  return (title || "").toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

let productsByNormalizedTitle = {};
existingProductsData.products.forEach((p, idx) => {
    if (p.title) {
        productsByNormalizedTitle[normalizeTitle(p.title)] = idx;
    }
    if (p.slug) {
        productsByNormalizedTitle[normalizeTitle(p.slug)] = idx;
    }
});

let updatedCount = 0;
let newCount = 0;

newData.products.forEach(newItem => {
    let normTitle = normalizeTitle(newItem.product_name);
    let index = productsByNormalizedTitle[normTitle];
    
    if (index === undefined) {
        for (let key in productsByNormalizedTitle) {
            if (key.includes(normTitle) || normTitle.includes(key)) {
                index = productsByNormalizedTitle[key];
                break;
            }
        }
    }

    let productObj;
    if (index !== undefined) {
        productObj = existingProductsData.products[index];
        updatedCount++;
    } else {
        productObj = {
            slug: generateSlug(newItem.product_name),
            title: newItem.product_name,
            subtitle: newItem.tagline || "",
            image: "",
            tabs: {}
        };
        existingProductsData.products.push(productObj);
        productsByNormalizedTitle[normTitle] = existingProductsData.products.length - 1;
        newCount++;
    }

    if (!productObj.tabs) productObj.tabs = {};

    let compContent = '';
    if (newItem.composition) {
        compContent = `<p>${newItem.composition}</p>`;
    }

    productObj.tabs.composition = {
        title: "Composition",
        content: `<div class=\"wpb_text_column wpb_content_element pagetext\">\n\t\t<div class=\"wpb_wrapper\">\n\t\t\t${compContent}\n\t\t</div>\n\t</div>`
    };

    let benefitsHtml = '';
    if (newItem.benefits && newItem.benefits.length > 0) {
        benefitsHtml = `<ul>${newItem.benefits.map(b => `<li>${b}</li>`).join('')}</ul>`;
    }

    productObj.tabs.indications_benefits = {
        title: "Indications & Benefits",
        content: `<div class=\"wpb_text_column wpb_content_element pagetext \">\n\t\t<div class=\"wpb_wrapper\">\n\t\t\t<div id=\"tab\" class=\"tab-pane active\" role=\"tabpanel\">\n${benefitsHtml}\n</div>\n\t\t</div>\n\t</div>`
    };

    let dosageHtml = '';
    if (newItem.directions_for_use) {
        dosageHtml += `<p><strong>Directions for Use:</strong> ${newItem.directions_for_use}</p>`;
    }
    if (newItem.recommended_usage) {
        dosageHtml += `<p><strong>Recommended Usage:</strong> ${newItem.recommended_usage}</p>`;
    }
    if (newItem.presentation) {
        dosageHtml += `<p><strong>Presentation:</strong> ${newItem.presentation}</p>`;
    }

    productObj.tabs.dosage = {
        title: "Dosage & Presentation",
        content: `<div class=\"wpb_text_column wpb_content_element pagetext \">\n\t\t<div class=\"wpb_wrapper\">\n\t\t\t<div id=\"tab4\" class=\"tab-pane active\" role=\"tabpanel\">\n${dosageHtml}\n</div>\n\t\t</div>\n\t</div>`
    };
});

fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(existingProductsData, null, 2), 'utf8');

console.log(`Aquaculture Merge complete. Updated ${updatedCount} existing products. Added ${newCount} new products.`);
