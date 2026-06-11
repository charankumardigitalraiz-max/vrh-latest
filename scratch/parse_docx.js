const fs = require('fs');
const path = require('path');

const xmlPath = path.join(__dirname, 'docx_extracted', 'word', 'document.xml');
const xmlContent = fs.readFileSync(xmlPath, 'utf8');

// A simple regex parser for <w:p> and <w:t> tags
const paragraphs = [];
const pMatches = xmlContent.match(/<w:p\b[^>]*>([\s\S]*?)<\/w:p>/g) || [];

for (const p of pMatches) {
    const tMatches = p.match(/<w:t\b[^>]*>(.*?)<\/w:t>/g) || [];
    const pText = tMatches.map(t => {
        // Strip tags
        return t.replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    }).join('');
    paragraphs.push(pText);
}

fs.writeFileSync(path.join(__dirname, 'extracted_jd.txt'), paragraphs.join('\n'), 'utf8');
console.log('Successfully extracted', paragraphs.length, 'paragraphs.');
