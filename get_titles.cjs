const fs = require('fs');
const path = require('path');
const PRODUCTS_FILE = path.join(__dirname, 'src', 'data', 'products.json');
let existingProductsData = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8'));

const missing = [
'aqua',
'ceesure',
'eest',
'nutrinest',
'oxyenrich',
'planktomore',
'proboon-aqua',
'qualimin-aqua-forte',
'qualimin-aqua',
'quitstress-aqua',
'toxiclean-aqua',
'toxiclean-fs',
'yuwin-gold',
'yuwin',
'colferol-d3',
'antiprol',
'tylosure',
'lineodox',
'd-beak',
'protemit-eo',
'proboon-fs',
'enrorite',
'zithrosure',
'fly-xil-gold',
'larvend',
'freall',
'cheqvir',
'succical-fb',
'succical-m',
'quatsure',
'nurture-all',
'ligabind',
'bindosorb-n'];

missing.forEach(slug => {
    let prod = existingProductsData.products.find(p => p.slug === slug);
    if(prod) {
        console.log(`{ id: '${slug}', name: '${prod.title}' },`);
    } else {
        console.log(`Missing slug entirely: ${slug}`);
    }
});
