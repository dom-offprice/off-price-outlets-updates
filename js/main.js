// Off Price Outlets - Main JavaScript

// Social follow modal
const socialModal = document.getElementById('social-modal');
const openSocialModalBtns = document.querySelectorAll('.open-social-modal-btn');
const closeSocialModalBtn = document.getElementById('close-social-modal');
const dismissSocialModalBtn = document.getElementById('social-modal-dismiss');
const socialModalBackdrop = document.getElementById('social-modal-backdrop');

function openSocialModal() {
    if (socialModal) {
        socialModal.classList.add('is-open');
        socialModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
}

function closeSocialModal() {
    if (socialModal) {
        socialModal.classList.remove('is-open');
        socialModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

if (openSocialModalBtns.length) {
    openSocialModalBtns.forEach(function(btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            openSocialModal();
        });
    });
}
if (closeSocialModalBtn) {
    closeSocialModalBtn.addEventListener('click', closeSocialModal);
}
if (dismissSocialModalBtn) {
    dismissSocialModalBtn.addEventListener('click', closeSocialModal);
}
if (socialModalBackdrop) {
    socialModalBackdrop.addEventListener('click', closeSocialModal);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && socialModal && socialModal.classList.contains('is-open')) {
        closeSocialModal();
    }
});

// Mid-page address: open Maps (default link) + copy full address on tap/click
const saleAddressCta = document.getElementById('sale-address-cta');
if (saleAddressCta) {
    saleAddressCta.addEventListener('click', function () {
        const text = saleAddressCta.getAttribute('data-address');
        if (!text) return;
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).catch(function () {});
        }
    });
}

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navScrim = document.getElementById('nav-scrim');

function setNavOpen(isOpen) {
    if (!navMenu || !navToggle) return;
    navMenu.classList.toggle('active', isOpen);
    if (navScrim) {
        navScrim.hidden = !isOpen;
        navScrim.classList.toggle('is-visible', isOpen);
    }
    document.body.classList.toggle('nav-open', isOpen);
    const spans = navToggle.querySelectorAll('span');
    if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

if (navToggle) {
    navToggle.addEventListener('click', () => {
        setNavOpen(!navMenu.classList.contains('active'));
    });
}

if (navScrim) {
    navScrim.addEventListener('click', () => setNavOpen(false));
}

// Close mobile menu when clicking on a link / follow CTA
const navLinks = document.querySelectorAll('.nav-menu a, .nav-menu .open-social-modal-btn');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            setNavOpen(false);
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty hash
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Gallery image lightbox effect (optional enhancement)
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        // Create lightbox overlay
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            cursor: pointer;
        `;
        
        const lightboxImg = document.createElement('img');
        lightboxImg.src = img.src;
        lightboxImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        `;
        
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);
        
        // Close lightbox on click
        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});

// Form validation (if contact form is added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Track CTA clicks for analytics (placeholder)
const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-social');
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = button.textContent.trim();
        const buttonHref = button.getAttribute('href');
        
        // Log to console (replace with actual analytics tracking)
        console.log('CTA Clicked:', {
            text: buttonText,
            href: buttonHref,
            timestamp: new Date().toISOString()
        });
        
        // Example: Google Analytics tracking (uncomment if GA is set up)
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'cta_click', {
        //         'event_category': 'engagement',
        //         'event_label': buttonText,
        //         'value': buttonHref
        //     });
        // }
    });
});

// Lazy loading for images (modern browsers support this natively)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Update copyright year dynamically
const copyrightYear = document.querySelector('.footer-bottom p');
if (copyrightYear) {
    const currentYear = new Date().getFullYear();
    copyrightYear.textContent = `© ${currentYear} Off Price Outlets. All rights reserved.`;
}


// Sale countdown + sticky directions bar
(function initSaleUrgency() {
    const countdownEl = document.getElementById('sale-countdown');
    const sticky = document.getElementById('sticky-sale-bar');
    const saleStart = new Date('2026-08-01T10:00:00-04:00').getTime();
    const saleEnd = new Date('2026-08-02T16:00:00-04:00').getTime();

    function setCountdownMessage(message) {
        countdownEl.innerHTML = '<span class="hero-countdown-label">' + message + '</span>';
    }

    function tick() {
        if (!countdownEl) return;
        const now = Date.now();
        if (now >= saleEnd) {
            setCountdownMessage('This sale weekend has ended — follow us for the next date.');
            return;
        }
        if (now >= saleStart) {
            setCountdownMessage('We’re open now — come through before 4 PM!');
            return;
        }
        const diff = saleStart - now;
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const units = d > 0
            ? [
                { value: d, label: 'days' },
                { value: h, label: 'hrs' },
                { value: m, label: 'min' }
            ]
            : [
                { value: h, label: 'hrs' },
                { value: m, label: 'min' }
            ];
        countdownEl.innerHTML =
            '<span class="hero-countdown-label">Doors open in</span>' +
            '<span class="hero-countdown-units">' +
            units.map(function (unit) {
                return (
                    '<span class="hero-countdown-unit">' +
                    '<strong>' + unit.value + '</strong>' +
                    '<em>' + unit.label + '</em>' +
                    '</span>'
                );
            }).join('') +
            '</span>';
    }

    tick();
    setInterval(tick, 30000);

    if (!sticky) return;
    sticky.hidden = false;
    const hero = document.querySelector('.hero');
    function onScroll() {
        const show = window.scrollY > (hero ? hero.offsetHeight * 0.65 : 420);
        sticky.classList.toggle('is-visible', show);
        document.body.classList.toggle('has-sticky-sale', show);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();

// Hero entrance
(function initHeroMotion() {
    const cta = document.querySelector('.hero-cta');
    if (!cta) return;
    requestAnimationFrame(function () {
        cta.classList.add('is-ready');
    });
})();

// Infinite auto-scrolling testimonials carousel
(function initTestimonialsCarousel() {
    const track = document.getElementById('testimonials-track');
    const carousel = track && track.closest('.testimonials-carousel');
    if (!track || !carousel) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const originals = Array.from(track.children);
    originals.forEach(function (card) {
        const clone = card.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
    });

    function updateDuration() {
        const shiftWidth = track.scrollWidth / 2;
        const pixelsPerSecond = 52;
        const duration = Math.max(45, shiftWidth / pixelsPerSecond);
        track.style.setProperty('--testimonials-duration', duration + 's');
    }

    updateDuration();
    window.addEventListener('resize', updateDuration);
})();

// Console welcome message
console.log('%cOff Price Outlets', 'font-size: 24px; font-weight: bold; color: #DC143C;');
console.log('%cWebsite by Off Price Outlets Team', 'font-size: 12px; color: #666;');
console.log('Follow us: @OffPriceOutletsCT (Instagram) | @OffPriceOutlets (Facebook)');
