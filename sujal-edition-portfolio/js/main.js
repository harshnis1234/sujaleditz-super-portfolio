/* ========================================
   SUJAL EDITION - VIDEO EDITOR PORTFOLIO
   JavaScript for Interactions & Animations
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.getElementById('navbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleNavbarScroll);
    
    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // ACTIVE NAV LINK ON SCROLL
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavLink() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // ========================================
    // SCROLL ANIMATIONS (AOS-like)
    // ========================================
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    function checkScrollAnimations() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const delay = element.getAttribute('data-aos-delay') || 0;
            
            if (elementTop < windowHeight - 100) {
                setTimeout(() => {
                    element.classList.add('aos-animate');
                }, delay);
            }
        });
    }
    
    // Initial check
    checkScrollAnimations();
    
    // Check on scroll
    window.addEventListener('scroll', checkScrollAnimations);
    
    // ========================================
    // STATS COUNTER ANIMATION
    // ========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    function animateStats() {
        const statsContainer = document.querySelector('.stats-container');
        if (!statsContainer) return;
        
        const containerTop = statsContainer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (containerTop < windowHeight - 100 && !statsAnimated) {
            statsAnimated = true;
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                const suffix = stat.textContent.replace(/[0-9]/g, '');
                let current = 0;
                const increment = target / 50;
                const duration = 1500;
                const stepTime = duration / 50;
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + suffix;
                        clearInterval(counter);
                    } else {
                        stat.textContent = Math.floor(current) + suffix;
                    }
                }, stepTime);
            });
        }
    }
    
    window.addEventListener('scroll', animateStats);
    
    // ========================================
    // VIDEO CARD HOVER EFFECT
    // ========================================
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const thumbnail = this.querySelector('.video-thumbnail');
            thumbnail.style.background = 'linear-gradient(135deg, #1a2a1a 0%, #0a1a0a 100%)';
        });
        
        card.addEventListener('mouseleave', function() {
            const thumbnail = this.querySelector('.video-thumbnail');
            thumbnail.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)';
        });
    });
    
    // ========================================
    // SERVICE CARD INTERACTIONS
    // ========================================
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        // Stagger animation on load
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
// ========================================
// CONTACT FORM WHATSAPP SEND

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const phoneNumber = "919241993952";

        const text =
        "New Message From Website\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Message: " + message;

        const whatsappURL =
        "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(text);

        window.open(whatsappURL, "_blank");
    });
}
    
    // ========================================
    // PARALLAX EFFECT FOR HERO
    // ========================================
    const hero = document.querySelector('.hero');
    
    function parallaxEffect() {
        if (hero) {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.3;
            hero.style.backgroundPositionY = rate + 'px';
        }
    }
    
    window.addEventListener('scroll', parallaxEffect);
    
    // ========================================
    // TYPING EFFECT FOR HERO TITLE (Optional)
    // ========================================
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // ========================================
    // LOADING ANIMATION
    // ========================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger initial animations
        setTimeout(() => {
            checkScrollAnimations();
            animateStats();
        }, 100);
    });
    
    // ========================================
    // SCROLL TO TOP BUTTON (Optional)
    // ========================================
    function createScrollToTopButton() {
        const button = document.createElement('button');
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        button.className = 'scroll-to-top';
        button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
            color: #0a0a0a;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);
        `;
        
        document.body.appendChild(button);
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        });
        
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.5)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.4)';
        });
    }
    
    createScrollToTopButton();
    
    // ========================================
    // MAGNETIC BUTTON EFFECT (Optional Enhancement)
    // ========================================
    const magneticElements = document.querySelectorAll('.cta-button, .submit-button');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
    
    // ========================================
    // GLOW EFFECT ON CARDS
    // ========================================
    const glowCards = document.querySelectorAll('.stat-box, .service-card, .video-card');
    
    glowCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Intersection Observer for better performance (alternative to scroll events)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});
