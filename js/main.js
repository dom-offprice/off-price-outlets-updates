// Off Price Outlets - Main JavaScript

// Social follow modal
const socialModal = document.getElementById('social-modal');
const openSocialModalBtns = document.querySelectorAll('.open-social-modal-btn');
const closeSocialModalBtn = document.getElementById('close-social-modal');
const dismissSocialModalBtn = document.getElementById('social-modal-dismiss');
const socialModalBackdrop = document.getElementById('social-modal-backdrop');
let socialModalLastFocus = null;

function getSocialModalFocusable() {
    if (!socialModal) return [];
    return Array.from(
        socialModal.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
    ).filter(function (el) {
        return !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true';
    });
}

function openSocialModal() {
    if (!socialModal) return;
    socialModalLastFocus = document.activeElement;
    socialModal.classList.add('is-open');
    socialModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const focusable = getSocialModalFocusable();
    const target = dismissSocialModalBtn || focusable[0];
    if (target) {
        window.setTimeout(function () {
            target.focus();
        }, 10);
    }
}

function closeSocialModal() {
    if (!socialModal) return;
    socialModal.classList.remove('is-open');
    socialModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (socialModalLastFocus && typeof socialModalLastFocus.focus === 'function') {
        socialModalLastFocus.focus();
    }
    socialModalLastFocus = null;
}

if (openSocialModalBtns.length) {
    openSocialModalBtns.forEach(function (btn) {
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

document.addEventListener('keydown', function (e) {
    if (!socialModal || !socialModal.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
        closeSocialModal();
        return;
    }
    if (e.key !== 'Tab') return;
    const focusable = getSocialModalFocusable();
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    }
});

// Mid-page address: open Maps + copy address with brief feedback
const saleAddressCta = document.getElementById('sale-address-cta');
if (saleAddressCta) {
    saleAddressCta.addEventListener('click', function () {
        const text = saleAddressCta.getAttribute('data-address');
        if (!text || !navigator.clipboard || !window.isSecureContext) return;
        const original = saleAddressCta.textContent;
        navigator.clipboard.writeText(text).then(function () {
            saleAddressCta.textContent = 'Address copied';
            window.setTimeout(function () {
                saleAddressCta.textContent = original;
            }, 1600);
        }).catch(function () {});
    });
}

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navScrim = document.getElementById('nav-scrim');

function setNavOpen(isOpen) {
    if (!navMenu || !navToggle) return;
    navMenu.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
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
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-controls', 'nav-menu');
    navToggle.addEventListener('click', function () {
        setNavOpen(!navMenu.classList.contains('active'));
    });
}

if (navScrim) {
    navScrim.addEventListener('click', function () {
        setNavOpen(false);
    });
}

// Close mobile menu when clicking on a link / follow CTA
const navLinks = document.querySelectorAll('.nav-menu a, .nav-menu .open-social-modal-btn');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
            setNavOpen(false);
        }
    });
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        setNavOpen(false);
        if (navToggle) navToggle.focus();
    }
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

// Below-fold section fade-in (never hide the hero)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
    const sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-inview');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('section:not(.hero)').forEach(function (section) {
        section.classList.add('reveal-section');
        sectionObserver.observe(section);
    });
}

// Gallery lightbox
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(function (img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function () {
        const lightbox = document.createElement('div');
        lightbox.className = 'gallery-lightbox';
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
        lightbox.setAttribute('aria-label', 'Image preview');

        const lightboxImg = document.createElement('img');
        lightboxImg.src = img.currentSrc || img.src;
        lightboxImg.alt = img.alt || '';

        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.className = 'gallery-lightbox-close';
        closeBtn.setAttribute('aria-label', 'Close image preview');
        closeBtn.innerHTML = '&times;';

        function closeLightbox() {
            document.removeEventListener('keydown', onKey);
            if (lightbox.parentNode) lightbox.parentNode.removeChild(lightbox);
            document.body.style.overflow = '';
        }

        function onKey(e) {
            if (e.key === 'Escape') closeLightbox();
        }

        closeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            closeLightbox();
        });
        lightbox.addEventListener('click', closeLightbox);
        document.addEventListener('keydown', onKey);

        lightbox.appendChild(closeBtn);
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    });
});

// Update copyright year dynamically
const copyrightYear = document.querySelector('.footer-bottom p');
if (copyrightYear) {
    const currentYear = new Date().getFullYear();
    copyrightYear.textContent = `© ${currentYear} Off Price Outlets. All rights reserved.`;
}


// Live sale countdown + sticky directions bar
(function initSaleUrgency() {
    const countdownEl = document.getElementById('sale-countdown');
    const sticky = document.getElementById('sticky-sale-bar');
    const saleStart = new Date('2026-08-01T10:00:00-04:00').getTime();
    const saleEnd = new Date('2026-08-02T16:00:00-04:00').getTime();
    let mode = '';
    let timerId = null;
    let lastAnnouncedMinute = -1;

    function pad(n) {
        return n < 10 ? '0' + n : String(n);
    }

    function setCountdownMessage(message) {
        mode = 'message';
        countdownEl.classList.add('is-message');
        countdownEl.innerHTML = '<span class="hero-countdown-label">' + message + '</span>';
    }

    function ensureTimerShell() {
        if (mode === 'timer') return;
        mode = 'timer';
        countdownEl.classList.remove('is-message');
        countdownEl.innerHTML =
            '<span class="hero-countdown-label">Doors open in</span>' +
            '<span class="hero-countdown-units" aria-hidden="true">' +
            '<span class="hero-countdown-unit" data-unit="days"><strong>00</strong><em>days</em></span>' +
            '<span class="hero-countdown-sep" aria-hidden="true">:</span>' +
            '<span class="hero-countdown-unit" data-unit="hours"><strong>00</strong><em>hrs</em></span>' +
            '<span class="hero-countdown-sep" aria-hidden="true">:</span>' +
            '<span class="hero-countdown-unit" data-unit="mins"><strong>00</strong><em>min</em></span>' +
            '<span class="hero-countdown-sep" aria-hidden="true">:</span>' +
            '<span class="hero-countdown-unit hero-countdown-unit--secs" data-unit="secs"><strong>00</strong><em>sec</em></span>' +
            '</span>';
    }

    function announce(text, minuteKey) {
        if (minuteKey === lastAnnouncedMinute) return;
        lastAnnouncedMinute = minuteKey;
        const live = document.getElementById('sale-countdown-live');
        if (live) live.textContent = text;
    }

    function setUnit(name, value, animate) {
        const unit = countdownEl.querySelector('[data-unit="' + name + '"] strong');
        if (!unit) return;
        const next = pad(value);
        if (unit.textContent === next) return;
        unit.textContent = next;
        if (animate) {
            unit.classList.remove('is-tick');
            // force reflow so animation can replay
            void unit.offsetWidth;
            unit.classList.add('is-tick');
        }
    }

    function tick() {
        if (!countdownEl) return;
        const now = Date.now();

        if (now >= saleEnd) {
            setCountdownMessage('This sale has ended — follow us for the next date.');
            if (timerId) {
                clearInterval(timerId);
                timerId = null;
            }
            return;
        }

        if (now >= saleStart) {
            // During sale weekend: count down to closing on current day feel — until saleEnd
            ensureTimerShell();
            const label = countdownEl.querySelector('.hero-countdown-label');
            if (label) label.textContent = 'Sale open — closes in';
            const diffOpen = saleEnd - now;
            const d = Math.floor(diffOpen / 86400000);
            const h = Math.floor((diffOpen % 86400000) / 3600000);
            const m = Math.floor((diffOpen % 3600000) / 60000);
            const s = Math.floor((diffOpen % 60000) / 1000);
            setUnit('days', d, false);
            setUnit('hours', h, false);
            setUnit('mins', m, false);
            setUnit('secs', s, true);
            announce('Sale closes in ' + d + ' days, ' + h + ' hours, ' + m + ' minutes', m + 1000);
            return;
        }

        ensureTimerShell();
        const label = countdownEl.querySelector('.hero-countdown-label');
        if (label) label.textContent = 'Doors open in';
        const diff = saleStart - now;
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        setUnit('days', d, false);
        setUnit('hours', h, false);
        setUnit('mins', m, false);
        setUnit('secs', s, true);
        announce('Doors open in ' + d + ' days, ' + h + ' hours, ' + m + ' minutes', m);
    }

    if (countdownEl) {
        tick();
        timerId = setInterval(tick, 1000);
    }

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

