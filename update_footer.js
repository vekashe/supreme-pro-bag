const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const oldFooterProducts = `            <div class="footer__col">
                <h4 class="footer__title">Products</h4>
                <ul class="footer__links">
                    <li><a href="#">Paper Bag</a></li>
                    <li><a href="#">Retail Bag</a></li>
                    <li><a href="#">Event Bag</a></li>
                    <li><a href="#">Food Service Bag</a></li>
                </ul>
            </div>`;

const newFooterProducts = `            <div class="footer__col">
                <h4 class="footer__title">Products</h4>
                <ul class="footer__links">
                    <li><a href="product-detail-paper-bags.html">Paper Bag</a></li>
                    <li><a href="product-detail-retail-bags.html">Retail Bag</a></li>
                    <li><a href="product-detail-gift-bags.html">Gift Bag</a></li>
                    <li><a href="product-detail-food-bags.html">Food Bag</a></li>
                </ul>
            </div>`;

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Normalize newlines for matching just in case
    // We'll replace it by trying to match the old block as closely as possible.
    // It's safer to use regex to handle whitespace variations
    const searchRegex = /<div class="footer__col">\s*<h4 class="footer__title">Products<\/h4>\s*<ul class="footer__links">\s*<li><a href="#">Paper Bag<\/a><\/li>\s*<li><a href="#">Retail Bag<\/a><\/li>\s*<li><a href="#">Event Bag<\/a><\/li>\s*<li><a href="#">Food Service Bag<\/a><\/li>\s*<\/ul>\s*<\/div>/g;

    if (searchRegex.test(content)) {
        content = content.replace(searchRegex, newFooterProducts);
        fs.writeFileSync(filePath, content, 'utf8');
        updatedCount++;
    } else {
        console.log("Could not find the footer products block in " + file);
    }
});

console.log(`Updated ${updatedCount} files.`);
