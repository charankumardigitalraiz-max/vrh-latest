const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE = path.join(__dirname, 'src', 'data', 'products.json');
const NEW_DATA_FILE = path.join(__dirname, 'public', 'rrveterinary_products_data.json');
const CATEGORIES_FILE = path.join(__dirname, 'src', 'data', 'categories.js'); // Not strictly mapping but good to know

// Read exiting data
let existingProductsData = { products: [] };
try {
  existingProductsData = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8'));
} catch (e) {
  console.error("Could not read existing products.json");
}

let newData = [];
try {
  newData = JSON.parse(fs.readFileSync(NEW_DATA_FILE, 'utf8'));
} catch (e) {
  console.error("Could not read new data file.");
}

function normalizeTitle(title) {
  // Removes spaces, hyphens, makes lower case to match against existing titles
  return (title || "").toString().toLowerCase().replace(/[\s\-\_\(\)&]/g, '');
}

function generateSlug(title) {
  return (title || "").toString().toLowerCase()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
    .replace(/\-\-+/g, '-')     // Replace multiple - with single -
    .replace(/^-+/, '')         // Trim - from start of text
    .replace(/-+$/, '');        // Trim - from end of text
}

// Map existing products by normalized title
let productsByNormalizedTitle = {};
existingProductsData.products.forEach((p, idx) => {
    if (p.title) {
        productsByNormalizedTitle[normalizeTitle(p.title)] = idx;
    }
    // Also map by slug normalized just in case
    if (p.slug) {
        productsByNormalizedTitle[normalizeTitle(p.slug)] = idx;
    }
});

let updatedCount = 0;
let newCount = 0;

newData.forEach(newItem => {
    let normTitle = normalizeTitle(newItem.product_name);
    let index = productsByNormalizedTitle[normTitle];
    
    // Check if we can find partial matches for tricky names like "TOXELIM-B GOLD" vs "TOXELIM-B GOLD TM (Powder)"
    // We try to find if the new title is included in the old title or vice-versa
    if (index === undefined) {
        for (let key in productsByNormalizedTitle) {
            if (key.includes(normTitle) || normTitle.includes(key)) {
                // Heuristic match
                index = productsByNormalizedTitle[key];
                break;
            }
        }
    }

    let productObj;
    if (index !== undefined) {
        // Update existing
        productObj = existingProductsData.products[index];
        updatedCount++;
    } else {
        // Create new
        productObj = {
            slug: generateSlug(newItem.product_name),
            title: newItem.product_name,
            subtitle: newItem.category || "",
            image: "", // Might need default image
            tabs: {}
        };
        existingProductsData.products.push(productObj);
        productsByNormalizedTitle[normTitle] = existingProductsData.products.length - 1; // register it
        newCount++;
    }

    // Format new content nicely into tabs if they don't already exist or even overwrite so it's consistent
    // Requirement says "check and integrate in code properly", let's safely update the tabs keeping existing structure but updating content
    
    // We will build pure HTML strings for the tabs
    if (!productObj.tabs) productObj.tabs = {};

    productObj.tabs.composition = {
        title: "Composition",
        content: `<div class=\"wpb_text_column wpb_content_element pagetext\">\n\t\t<div class=\"wpb_wrapper\">\n\t\t\t<p>${newItem.composition || ''}</p>\n\t\t</div>\n\t</div>`
    };

    productObj.tabs.indications_benefits = {
        title: "Indications & Benefits",
        content: `<div class=\"wpb_text_column wpb_content_element pagetext\">\n\t\t<div class=\"wpb_wrapper\">\n\t\t\t<div id=\"tab\" class=\"tab-pane active\" role=\"tabpanel\">\n\t\t\t\t<p>${newItem.indications || ''}</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>`
    };

    // Combine dosage and packing
    const packingHtml = newItem.packing ? `<p><strong>Packing:</strong> ${newItem.packing}</p>` : '';
    const dosageHtml = newItem.directions_for_use ? `<p>${newItem.directions_for_use}</p>` : '';
    
    productObj.tabs.dosage = {
        title: "Dosage & Packing",
        content: `<div class=\"wpb_text_column wpb_content_element pagetext\">\n\t\t<div class=\"wpb_wrapper\">\n\t\t\t<div id=\"tab4\" class=\"tab-pane active\" role=\"tabpanel\">\n\t\t\t\t${dosageHtml}\n\t\t\t\t${packingHtml}\n\t\t\t</div>\n\t\t</div>\n\t</div>`
    };
});

fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(existingProductsData, null, 2), 'utf8');

console.log(`Merge complete. Updated ${updatedCount} existing products. Added ${newCount} new products.`);
