# Project Guidelines & Context

## Project Overview
This is a multi-page vanilla web project (HTML, CSS, JavaScript). 
The website consists of exactly five pages:
1. Home (`index.html`)
2. About (`about.html`)
3. Product List (`products.html`)
4. Product Detail (`product-detail.html`)
5. Contact (`contact.html`)

## Design Specifications & Assets
* **Design Reference:** All layout decisions must align with the Figma export located at `assets/design/`.
* **Typography:** The project uses **Averia Serif Libre** and **Poppins**. Ensure these are imported correctly (e.g., via Google Fonts) and applied consistently.
* **Color Palette:** The core brand colors are **#36599F** and **#ffffff**. 
* **Images:** All image assets to be used in `<img>` tags or CSS background properties are located in the `assets/img/` directory. Always use relative paths pointing to this folder.

## General Coding Standards

### HTML & Libraries
* **Semantic Structure:** Use modern semantic HTML5 tags (e.g., `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) instead of nested `<div>` tags wherever possible.
* **Carousel Component:** Use **Swiper JS** for all carousel/slider sections. Ensure the necessary Swiper CSS and JS files (via CDN or local) are properly linked in the HTML.
* **Accessibility (a11y):** Ensure all images from `assets/img/` have descriptive `alt` attributes. Use `aria-` labels for interactive elements.

### CSS Best Practices
* **Mobile-First Responsive:** Strictly adhere to a mobile-first approach. Write base styles for mobile screens first, and use `min-width` media queries to scale up the layout for tablets and desktops.
* **Variables:** Define a root set of CSS variables (`:root`) for the specific colors (`#36599F`, `#ffffff`) and typography to maintain consistency across all five pages.
* **Layout:** Rely on modern layout techniques like **CSS Grid** and **Flexbox**.
* **Modularity:** Keep the stylesheet organized with clear section comments (e.g., `/* --- Header --- */`, `/* --- Swiper Overrides --- */`).

### JavaScript Best Practices
* **Modern Syntax:** Use ES6+ syntax exclusively. Use `const` and `let` (never `var`), arrow functions, template literals, and destructuring.
* **Swiper Initialization:** Keep Swiper JS configuration neat and modular within your JavaScript files.
* **DOM Manipulation:** Cache DOM queries when elements are accessed multiple times. Use `addEventListener` for event binding instead of inline `onclick` attributes in the HTML.