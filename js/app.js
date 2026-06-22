/**
 * Main application logic
 * Uses ES6+ syntax
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Swiper Initialization ---
    const initSwipers = () => {
        // Testimonial Swiper
        const testimonialSwiper = document.querySelector('.testimonial-swiper');
        
        if (testimonialSwiper) {
            new Swiper(testimonialSwiper, {
                direction: 'horizontal',
                loop: true,
                slidesPerView: 1,
                spaceBetween: 30,
                
                navigation: {
                    nextEl: '.swiper-button-next-testi',
                    prevEl: '.swiper-button-prev-testi',
                },
                
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }
            });
        }

        // Gallery Swiper
        const gallerySwiper = document.querySelector('.gallery-swiper');
        
        if (gallerySwiper) {
            new Swiper(gallerySwiper, {
                direction: 'horizontal',
                loop: true,
                slidesPerView: 2,
                spaceBetween: 0,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    }
                }
            });
        }
    };

    initSwipers();
    
    // --- Mobile Menu Toggle ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            
            // Toggle icon
            const icon = mobileToggle.querySelector('i');
            if(nav.classList.contains('active')) {
                icon.classList.remove('bx-menu');
                icon.classList.add('bx-x');
                // Apply simple mobile menu styles directly or add a class.
                // For simplicity, we just toggle active class.
            } else {
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu');
            }
        });
    }
});
