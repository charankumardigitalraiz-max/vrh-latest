const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('d:\\charan\\React\\vrh-latest\\public\\RR VETERINARY_PRODUCT PROFILE_AW.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('d:\\charan\\React\\vrh-latest\\pdf_text.txt', data.text);
    console.log("Extraction complete.");
}).catch(console.error);
