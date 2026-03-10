const fs = require('fs');

const path = 'd:\\charan\\React\\VRH Project\\Archive\\src\\data\\products.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

data.products.forEach(p => {
  if (p.slug === 'avicure-fs') p.brochure = '/products-download/avicure-fs.pdf';
  else if (p.slug === 'entrowin-ws-fs') p.brochure = '/products-download/ENTROWIN_LIT_FS_WS_19082016.pdf';
  else if (p.slug === 'planktomore') p.brochure = '/products-download/PLANKTOMORE.pdf';
  else if (p.slug === 'qualimin-aqua-forte') p.brochure = '/products-download/Qualimin Aqua forte.pdf';
  else if (p.slug === 'qualimin-aqua') p.brochure = '/products-download/1528786323wpdm_Qualimin Aqua.pdf';
  else if (p.slug === 'quitstress-aqua') p.brochure = '/products-download/Quitstress Aqua.pdf';
  else if (p.slug.includes('toxiclean')) p.brochure = '/products-download/TOXICLEAN.pdf';
  else if (p.slug.includes('toxelim-b')) p.brochure = '/products-download/A4_F_B_TOXELIM-B.pdf';
});

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Updated products.json');
