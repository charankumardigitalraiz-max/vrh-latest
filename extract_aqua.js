const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'src', 'data', 'products.json');

try {
    const rawData = fs.readFileSync(productsPath, 'utf8');
    const data = JSON.parse(rawData);

    const aquaProducts = data.products.filter(p => {
        const searchStr = ((p.title || '') + ' ' + (p.subtitle || '') + ' ' + (p.slug || '') + ' ' + (p.image || '')).toLowerCase();
        return searchStr.includes('aquaculture') || searchStr.includes('aqua');
    });

    console.log('Total Aqua Products found:', aquaProducts.length);
    console.log(JSON.stringify(aquaProducts.map(p => ({ slug: p.slug, title: p.title })), null, 2));
    
    // Also save the full data to a temporary file for analysis
    fs.writeFileSync('aqua_products_list.json', JSON.stringify(aquaProducts, null, 2));

} catch (err) {
    console.error('Error:', err.message);
}
