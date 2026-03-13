const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'src', 'data', 'products.json');

try {
    const rawData = fs.readFileSync(productsPath, 'utf8');
    const data = JSON.parse(rawData);

    const seenSlugs = new Set();
    const uniqueProducts = [];

    for (const product of data.products) {
        if (!seenSlugs.has(product.slug)) {
            uniqueProducts.push(product);
            seenSlugs.add(product.slug);
        } else {
            console.log('Duplicate found and removed:', product.slug);
        }
    }

    data.products = uniqueProducts;

    fs.writeFileSync(productsPath, JSON.stringify(data, null, 2));
    console.log('Deduplication complete. Total products:', uniqueProducts.length);

} catch (err) {
    console.error('Error:', err.message);
}
