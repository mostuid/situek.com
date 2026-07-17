// ============================================
// SITUEK.ID - JAVASCRIPT LENGKAP
// ============================================

// ===== PREVENT AUTO SCROLL =====
window.addEventListener('load', function() {
    if (window.scrollY > 0) {
        window.scrollTo(0, 0);
    }
});

// ===== ANIMASI LEFT-HERO FALLBACK =====
document.addEventListener('DOMContentLoaded', function() {
    const heroLeft = document.querySelector('.hero .hero-left');
    if (heroLeft) {
        setTimeout(function() {
            heroLeft.style.opacity = '1';
            heroLeft.style.transform = 'translateX(0)';
        }, 1500);
    }
});

// ===== NAVBAR - SMOOTH TRANSFORM LOGO =====
const navbar = document.getElementById('navbar');
const navbarLogo = document.querySelector('.navbar-logo');
const navbarContainer = document.querySelector('.navbar-container');

let lastScrollY = window.scrollY;
let isNavbarScrolled = false;

// Fungsi untuk mendapatkan posisi tengah logo
function getLogoTransform() {
    if (!navbarContainer || !navbarLogo) return 0;
    
    const containerWidth = navbarContainer.offsetWidth;
    const logoWidth = navbarLogo.offsetWidth;
    
    // Hitung posisi tengah: (containerWidth - logoWidth) / 2 - padding
    const centerX = (containerWidth - logoWidth) / 2 - 24;
    
    return centerX;
}

// Fungsi utama update navbar - BERLAKU UNTUK SEMUA SECTION
function updateNavbar() {
    const currentScrollY = window.scrollY;
    const scrollDifference = currentScrollY - lastScrollY;
    
    // ===== LOGIKA UTAMA =====
    // Hanya berdasarkan posisi scroll, TIDAK peduli section apa
    
    if (currentScrollY === 0) {
        // POSISI 0px: Transparan, logo kiri, menu muncul
        navbar.classList.remove('scrolled');
        navbar.classList.remove('scrolled-bg');
        navbar.classList.remove('dark-bg');
        isNavbarScrolled = false;
        
        if (navbarLogo) {
            navbarLogo.style.transform = 'translateX(0)';
        }
        
    } else if (currentScrollY > 0) {
        // POSISI > 0px: Background buram
        
        if (scrollDifference > 0) {
            // SCROLL KE BAWAH: Logo ke tengah, menu hilang, background buram
            navbar.classList.add('scrolled');
            navbar.classList.remove('scrolled-bg');
            isNavbarScrolled = true;
            
            const centerX = getLogoTransform();
            if (navbarLogo) {
                navbarLogo.style.transform = `translateX(${centerX}px)`;
            }
            
        } else if (scrollDifference < 0) {
            // SCROLL KE ATAS: Logo kembali ke kiri, menu muncul, background TETAP BURAM
            if (isNavbarScrolled) {
                // Hapus class scrolled (agar menu muncul & logo kiri)
                navbar.classList.remove('scrolled');
                // Tambahkan class scrolled-bg (agar background tetap buram)
                navbar.classList.add('scrolled-bg');
                
                if (navbarLogo) {
                    navbarLogo.style.transform = 'translateX(0)';
                }
            }
        }
    }
    
    // Simpan posisi scroll terakhir
    lastScrollY = currentScrollY;
}

// ===== EVENT SCROLL =====
window.addEventListener('scroll', function() {
    updateNavbar();
});

// Jalankan sekali saat load untuk inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(updateNavbar, 50);
});

// Update saat resize (agar posisi tengah tetap akurat)
window.addEventListener('resize', function() {
    if (isNavbarScrolled && navbar.classList.contains('scrolled')) {
        const centerX = getLogoTransform();
        if (navbarLogo) {
            navbarLogo.style.transform = `translateX(${centerX}px)`;
        }
    }
});

// Update saat scroll selesai
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateNavbar, 100);
});

// ===== NAVBAR MOBILE TOGGLE =====
const navbarToggle = document.getElementById('navbarToggle');
const navbarDropdown = document.getElementById('navbarDropdown');

if (navbarToggle && navbarDropdown) {
    navbarToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navbarDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!navbarToggle.contains(e.target) && !navbarDropdown.contains(e.target)) {
            navbarDropdown.classList.add('hidden');
        }
    });

    navbarDropdown.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navbarDropdown.classList.add('hidden');
        });
    });
}

// ===== SCROLL ANIMATION =====
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    }
);

const animateElements = document.querySelectorAll(
    '.produk-card, .artikel-card, .tentang-item, .testimoni-card'
);

animateElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// ===== ANIMASI TESTIMONI BARU =====
const testimoniObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
    }
);

document.querySelectorAll('.testimoni-new-card').forEach((card) => {
    testimoniObserver.observe(card);
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.faq-item[open]').forEach((openItem) => {
            if (openItem !== this) {
                openItem.removeAttribute('open');
            }
        });
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    });
});

// ============================================
// END OF JAVASCRIPT
// ============================================
