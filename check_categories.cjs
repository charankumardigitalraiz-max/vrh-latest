// This script checks which products from products.json are missing from categories.js
const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE = path.join(__dirname, 'src', 'data', 'products.json');

let existingProductsData = { products: [] };
try {
  existingProductsData = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8'));
} catch (e) {
  console.error("Could not read existing products.json");
}

let existingProductSlugs = existingProductsData.products.map(p => p.slug);

// categories.js is a module, we can read it directly but it's an ES6 module (export const productCategories ...)
// so we'll just read it as text and extract all `id: 'slug'` values
const CATEGORIES_FILE = path.join(__dirname, 'src', 'data', 'categories.js');
let categoriesContent = fs.readFileSync(CATEGORIES_FILE, 'utf8');

// regex to find all id: 'something' or id: "something"
const regex = /id:\s*['"]([^'"]+)['"]/g;
let match;
const categoryIds = new Set();

while ((match = regex.exec(categoriesContent)) !== null) {
  categoryIds.add(match[1]);
}

console.log("Total unique category/product IDs in categories.js:", categoryIds.size);
console.log("Total products in products.json:", existingProductSlugs.length);

console.log('\n--- Missing in Categories.js ---');
existingProductSlugs.forEach(slug => {
    if (!categoryIds.has(slug)) {
        console.log(slug);
    }
});
