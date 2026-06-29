const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace footer whatsapp links
    // The snippet is usually `<a href="#"><i class='bx bxl-whatsapp'></i></a>`
    // Be careful to only replace when we find it in the footer socials context or just replace that specific exact string globally
    content = content.replace(/<a href="#"><i class='bx bxl-whatsapp'><\/i><\/a>/g, `<a href="https://wa.me/9092655555" target="_blank"><i class='bx bxl-whatsapp'></i></a>`);
    
    // Also replace the button in products.html
    content = content.replace(/<a href="#" class="btn btn--outline-light">What's App <i class='bx bxl-whatsapp'><\/i><\/a>/g, `<a href="https://wa.me/9092655555" target="_blank" class="btn btn--outline-light">What's App <i class='bx bxl-whatsapp'></i></a>`);
    
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('WhatsApp links updated.');
