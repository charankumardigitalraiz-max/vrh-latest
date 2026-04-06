import fs from 'fs';

const productsPath = 'd:/charan/React/vrh-latest/src/data/products.json';
const brochureDir = 'd:/charan/React/vrh-latest/public/products-download/today/';

const productData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const brochures = fs.readdirSync(brochureDir);

// Helper to clean names for matching
function clean(str) {
    if (!str) return '';
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const brochureMap = new Map();
brochures.forEach(f => {
    const name = f.split('.')[0];
    brochureMap.set(clean(name), f);
});

// Manual additions for items that didn't match perfectly during first pass
const manual = {
    'ceesure': 'ASKOCURE_PDF COPY_SD.pdf',
    'eliminator': 'RR ELIMINATOR_RAT CONTROL_NEW _NOVEMBER 2022 _PDF COPY.pdf',
    'bindosorb-n': 'byindo sorbe N.pdf',
    'oxyenrich': 'Oxy ENrich.pdf',
    'phenokil': 'PHENOKIL.pdf',
    'avigrow': 'Avigrow.pdf',
    'calciboost': 'CALCIBOOST.pdf',
    'antiprol': 'ANTIPROL NEW_2026.pdf',
    'entrowin': 'entrowin.pdf', // Wait, matches entrowin.jsx?
    'toxelim-b': 'Toxiclean.pdf' // Wait, Toxiclean is different.
};

productData.products = productData.products.map(p => {
    const slug = p.slug.toLowerCase();
    const cleanName = clean(p.title);
    
    let brochureFile = p.brochure ? p.brochure.split('/').pop() : null;

    if (manual[slug]) {
        brochureFile = manual[slug];
    } else if (!brochureFile && brochureMap.has(cleanName)) {
        brochureFile = brochureMap.get(cleanName);
    }

    if (brochureFile) {
        p.brochure = `/products-download/today/${brochureFile}`;
    }
    
    return p;
});

fs.writeFileSync(productsPath, JSON.stringify(productData, null, 2));
console.log(`Updated brochure links in products.json.`);
