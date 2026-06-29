const fs = require('fs');

const products = [
    {
        name: 'Paper Bags',
        file: 'product-detail-paper-bags.html',
        img: 'assets/img/home-page/paper-bag.png',
        desc: 'Eco-friendly paper bags designed for durability, style, and sustainable packaging for everyday business needs.'
    },
    {
        name: 'Non-woven bags',
        file: 'product-detail-non-woven-bags.html',
        img: 'assets/img/home-page/retail-bag.png',
        desc: 'Durable and reusable non-woven bags designed for eco-friendly, stylish, and long-lasting carrying solutions.'
    },
    {
        name: 'Food Bags',
        file: 'product-detail-food-bags.html',
        img: 'assets/img/home-page/our-process.png',
        desc: 'Food bags designed with safe, durable, and convenient packaging solutions to keep food fresh and secure.'
    },
    {
        name: 'Shopping Bags',
        file: 'product-detail-shopping-bags.html',
        img: 'assets/img/about-us/Subtract.png',
        desc: 'Stylish and durable shopping bags designed for convenient carrying and a better everyday shopping experience.'
    },
    {
        name: 'Gift Bags',
        file: 'product-detail-gift-bags.html',
        img: 'assets/img/home-page/retail-bag.png',
        desc: 'Elegant and durable gift bags designed to enhance packaging with style, convenience, and a premium look.'
    },
    {
        name: 'Retail Bags',
        file: 'product-detail-retail-bags.html',
        img: 'assets/img/home-page/paper-bag.png',
        desc: 'High-quality retail bags designed for stylish presentation, durability, and a seamless customer shopping experience.'
    },
    {
        name: 'Jewellery Bags',
        file: 'product-detail-jewellery-bags.html',
        img: 'assets/img/home-page/event-bag.png',
        desc: 'Jewellery bags designed with elegance and durability to provide secure packaging with a premium presentation.'
    }
];

const template = fs.readFileSync('product-detail.html', 'utf8');

products.forEach(p => {
    let content = template.replace(/<h2 class="product-info__title">Paper Bags<\/h2>/g, `<h2 class="product-info__title">${p.name}</h2>`);
    content = content.replace(/assets\/img\/home-page\/paper-bag\.png/g, p.img);
    content = content.replace(/Customized eco-friendly paper bags for stylish, durable, and sustainable brand packaging\./g, p.desc);
    content = content.replace(/Paper Bag Main/g, `${p.name} Main`);
    content = content.replace(/Paper Bag Thumbnail/g, `${p.name} Thumbnail`);
    fs.writeFileSync(p.file, content, 'utf8');
});

// Update products.html
let productsHtml = fs.readFileSync('products.html', 'utf8');

products.forEach(p => {
    // Look for the product card title and replace the href right below it
    // The structure is usually:
    // <h3 class="product-card__title">Title</h3>
    // <p class="product-card__desc">Desc</p>
    // <a href="product-detail.html" class="btn btn--primary btn--sm">Enquiry
    
    // We can use a regex to match the exact block for this product
    // Escape regex characters in desc
    const escapedDesc = p.desc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(<h3 class="product-card__title">${p.name}</h3>\\s*<p class="product-card__desc">${escapedDesc}</p>\\s*<a href=")product-detail\\.html(" class="btn btn--primary btn--sm">)`, 'g');
    
    productsHtml = productsHtml.replace(regex, `$1${p.file}$2`);
});

fs.writeFileSync('products.html', productsHtml, 'utf8');
console.log('Done generating detail pages and updating products.html');
