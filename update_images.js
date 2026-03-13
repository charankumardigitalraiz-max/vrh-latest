const fs = require('fs');
const path = require('path');

const mapping = {
    "humifyaqua": "/product-images/aqua/humif aqua.png",
    "microkil": "/product-images/aqua/microkil.png",
    "microkill-aqua": "/product-images/aqua/microkil.png",
    "quatsure": "/product-images/aqua/quatsure.png",
    "nurture-all": "/product-images/aqua/nurture all.png",
    "nutrinest": "/product-images/aqua/nurture all.png",
    "bindosorb-n": "/product-images/aqua/bindosorb - n.png",
    "yuwin": "/product-images/aqua/yuwin.png",
    "yuwin-gold": "/product-images/aqua/yuwin.png",
    "ligabind": "/product-images/aqua/ligabind.png",
    "ceesure": "/product-images/aqua/ceesure.png",
    "planktomore": "/product-images/aqua/planktomore.png",
    "qualimin-aqua": "/product-images/aqua/qualimin aqua.png",
    "qualimin-aqua-forte": "/product-images/aqua/qualimin aqus forte.png",
    "proboon-aqua": "/product-images/aqua/proboon aqua.png",
    "toxiclean-fs": "/product-images/aqua/toxiclean-fs.png",
    "eest": "/product-images/aqua/eest.png",
    "eliminator": "/product-images/aqua/eliminator powder.png",
    "oxyenrich": "/product-images/aqua/oxyenrich.png"
};

const filePath = path.join(__dirname, 'src', 'data', 'products.json');

try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    data.products.forEach(product => {
        if (mapping[product.slug]) {
            product.image = mapping[product.slug];
            console.log(`Updated ${product.slug} to ${mapping[product.slug]}`);
        }
    });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log("Finished updating products.json");
} catch (err) {
    console.error("Error updating file:", err);
}
