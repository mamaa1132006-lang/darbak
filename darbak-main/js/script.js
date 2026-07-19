/* ════════════════════════════════════════════════════════════════════
   DARBAK TRAVEL - JAVASCRIPT
   ════════════════════════════════════════════════════════════════════ */

(function() {
    'use strict';
    
    // ────────────────────────────────────────────────────────────────
    // 1. MOBILE MENU TOGGLE
    // ────────────────────────────────────────────────────────────────
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const body = document.body;
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            const isExpanded = this.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
            this.setAttribute('aria-label', isExpanded ? 'إغلاق القائمة' : 'فتح القائمة');
            
            // Prevent body scroll when menu is open
            body.style.overflow = isExpanded ? 'hidden' : '';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';
            });
        });
    }
    
    // ────────────────────────────────────────────────────────────────
    // 2. FAQ ACCORDION
    // ────────────────────────────────────────────────────────────────
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const btn = item.querySelector('.faq-question');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            }
        });
        
        // Keyboard accessibility
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // ────────────────────────────────────────────────────────────────
    // 3. SMOOTH SCROLL FOR ANCHOR LINKS
    // ────────────────────────────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ────────────────────────────────────────────────────────────────
    // 4. STICKY HEADER ON SCROLL
    // ────────────────────────────────────────────────────────────────
    let lastScroll = 0;
    const mainNav = document.querySelector('.main-nav');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            mainNav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            mainNav.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ────────────────────────────────────────────────────────────────
    // 5. LANGUAGE SWITCHER
    // ────────────────────────────────────────────────────────────────
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const lang = this.getAttribute('data-lang');
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            
            // Store preference
            localStorage.setItem('preferred-language', lang);
        });
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang) {
        const langBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
        if (langBtn) langBtn.click();
    }
    
    // ────────────────────────────────────────────────────────────────
    // 6. LOADING PERFORMANCE
    // ────────────────────────────────────────────────────────────────
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Lazy load images
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.dataset.src || img.src;
            });
        }
    });
    
})();