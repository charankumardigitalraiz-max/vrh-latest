const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'src', 'data', 'products.json');

try {
    const rawData = fs.readFileSync(productsPath, 'utf8');
    const data = JSON.parse(rawData);

    const aquaSlugs = new Set();
    const uniqueAquaProducts = [];
    const duplicates = [];

    data.products.forEach((p, index) => {
        const searchStr = ((p.title || '') + ' ' + (p.subtitle || '') + ' ' + (p.slug || '') + ' ' + (p.image || '')).toLowerCase();
        if (searchStr.includes('aquaculture') || searchStr.includes('aqua')) {
            if (aquaSlugs.has(p.slug)) {
                duplicates.push({ slug: p.slug, index });
            } else {
                aquaSlugs.add(p.slug);
                uniqueAquaProducts.push({ slug: p.slug, title: p.title, index });
            }
        }
    });

    console.log('Unique Aqua Products:', uniqueAquaProducts.length);
    console.log(JSON.stringify(uniqueAquaProducts, null, 2));
    console.log('\nDuplicates Found:', duplicates.length);
    console.log(JSON.stringify(duplicates, null, 2));

} catch (err) {
    console.error('Error:', err.message);
}
