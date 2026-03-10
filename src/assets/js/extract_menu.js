const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('..\\rrvet.html', 'utf-8');
const $ = cheerio.load(html);

// Find the menu
let menuHTML = '';

// Try matching elements with .menu or wp navigation specific ids
const navs = $('ul.menu, #menu-main-menu, nav ul, .mean-nav ul, header nav ul.navbar-nav');

if (navs.length > 0) {
    menuHTML = navs.first().html();
} else {
    // If not found, try to search for the ul that contains "About Us" text
    $('ul').each((i, el) => {
        if ($(el).text().includes('About Us') && $(el).text().includes('Quality Policy')) {
            menuHTML = $(el).html();
            return false; // break loop
        }
    });
}

if (menuHTML) {
    fs.writeFileSync('extracted_menu.html', `<ul class="navbar-nav">\n${menuHTML}\n</ul>`);
    console.log("Menu extracted successfully. Saved to extracted_menu.html");
} else {
    console.log("Could not find menu block.");
}
