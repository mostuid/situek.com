// ============================================
// SITUEK.ID - JAVASCRIPT LENGKAP
// ============================================

// ===== PREVENT AUTO SCROLL =====
window.addEventListener('load', function () {
    if (window.scrollY > 0) {
        window.scrollTo(0, 0);
    }
});

// ===== ANIMASI LEFT-HERO FALLBACK =====
document.addEventListener('DOMContentLoaded', function () {
    const heroLeft = document.querySelector('.hero .hero-left');
    if (heroLeft) {
        setTimeout(function () {
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
window.addEventListener('scroll', function () {
    updateNavbar();
});

// Jalankan sekali saat load untuk inisialisasi
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(updateNavbar, 50);
});

// Update saat resize (agar posisi tengah tetap akurat)
window.addEventListener('resize', function () {
    if (isNavbarScrolled && navbar.classList.contains('scrolled')) {
        const centerX = getLogoTransform();
        if (navbarLogo) {
            navbarLogo.style.transform = `translateX(${centerX}px)`;
        }
    }
});

// Update saat scroll selesai
let scrollTimeout;
window.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateNavbar, 100);
});

// ============================================
// NAVBAR MOBILE TOGGLE - ELEGAN
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarDropdown = document.getElementById('navbarDropdown');

    // Buat overlay
    const navbarOverlay = document.createElement('div');
    navbarOverlay.className = 'navbar-overlay';
    document.body.appendChild(navbarOverlay);

    // Fungsi close dropdown
    function closeDropdown() {
        if (navbarDropdown && navbarDropdown.classList.contains('open')) {
            navbarDropdown.classList.remove('open');
            if (navbarToggle) navbarToggle.classList.remove('open');
            navbarOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    }

    if (navbarToggle && navbarDropdown) {
        // Toggle dropdown
        navbarToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            const isOpen = navbarDropdown.classList.toggle('open');
            this.classList.toggle('open'); // <- Ini yang mengubah ikon
            navbarOverlay.classList.toggle('open');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Tutup dropdown saat klik overlay
        navbarOverlay.addEventListener('click', closeDropdown);

        // Tutup dropdown saat klik di luar
        document.addEventListener('click', function (e) {
            if (!navbarToggle.contains(e.target) && !navbarDropdown.contains(e.target)) {
                closeDropdown();
            }
        });

        // Tutup dropdown saat link diklik
        navbarDropdown.querySelectorAll('.navbar-dropdown-link').forEach(function (link) {
            link.addEventListener('click', closeDropdown);
        });
    }

    // Tutup dropdown saat scroll
    let lastScrollY = 0;
    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 10) {
            closeDropdown();
        }
        lastScrollY = currentScrollY;
    });
});

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

// ===== ANIMASI TESTIMONI BARU - BERANTAI =====
document.addEventListener('DOMContentLoaded', function () {
    const testimoniCards = document.querySelectorAll('.testimoni-new-card');

    if (testimoniCards.length === 0) return;

    // Buat observer untuk mendeteksi kapan section terlihat
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Saat section terlihat, jalankan animasi berantai
                    animateTestimoniCards();
                    // Hentikan observer setelah animasi dimulai
                    sectionObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    // Cari container grid dan observe
    const gridContainer = document.querySelector('.testimoni-new-grid');
    if (gridContainer) {
        sectionObserver.observe(gridContainer);
    }

    // Fungsi animasi berantai
    function animateTestimoniCards() {
        testimoniCards.forEach((card, index) => {
            // Delay berurutan: 100ms, 200ms, 300ms, dst
            const delay = (index + 1) * 100;

            setTimeout(() => {
                card.classList.add('visible');
            }, delay);
        });
    }

    // Backup: Jika section sudah terlihat saat load
    // Cek apakah grid sudah visible
    if (gridContainer) {
        const rect = gridContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top < windowHeight - 50) {
            // Sudah visible, jalankan animasi
            setTimeout(animateTestimoniCards, 300);
        }
    }
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

// ===== LAZY LOADING + FADE EFFECT =====
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img:not(.hero img)').forEach(img => {
        img.loading = 'lazy';
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';

        img.addEventListener('load', function () {
            this.style.opacity = '1';
        });

        if (img.complete) {
            img.style.opacity = '1';
        }
    });

    document.querySelectorAll('.hero img').forEach(img => {
        img.fetchPriority = 'high';
        img.loading = 'eager';
    });
});

// ============================================
// ANIMASI DAUN - JS Masuk (Overshoot Rotasi + Scale) + CSS Loop
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const leaf = document.querySelector('.hero .hero-right img:first-child');
    if (!leaf) return;

    // State
    let startTime = null;
    let animFrameId = null;
    let isAnimating = true;

    // Parameter animasi masuk
    const startRotation = -80;
    const endRotation = -15;
    const overshootRotation = -5; // Rotasi kelewatan (melewati -15 ke -5)
    const startScale = 0.3;
    const endScale = 0.9;
    const overshootScale = 0.95; // Scale kelewatan (melewati 0.9 ke 0.95)
    const duration = 1400;

    function animateEntrance(timestamp) {
        if (!isAnimating) return;
        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing easeOutBack (overshoot)
        function easeOutBack(x) {
            const c1 = 1.70158;
            const c3 = c1 + 1;
            return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
        }

        const eased = easeOutBack(progress);

        // Rotasi: dari -80 ke -15, tapi overshoot ke -5 dulu baru balik
        const rotation = startRotation + (overshootRotation - startRotation) * eased;
        // Kalau progress 1, rotasi harus -15 (bukan -5)
        const finalRotation = rotation - (overshootRotation - endRotation) * (1 - Math.pow(1 - progress, 3));

        // Scale: dari 0.3 ke 0.9, overshoot ke 0.95 dulu baru balik
        const scale = startScale + (overshootScale - startScale) * eased;
        const finalScale = scale - (overshootScale - endScale) * (1 - Math.pow(1 - progress, 3));

        // Terapkan
        leaf.style.transform = `rotate(${finalRotation}deg) scale(${finalScale})`;
        leaf.style.opacity = Math.min(progress * 1.2, 1);

        if (progress < 1) {
            animFrameId = requestAnimationFrame(animateEntrance);
        } else {
            // Animasi selesai
            leaf.style.transform = `rotate(-15deg) scale(0.9)`;
            leaf.style.opacity = '1';
            leaf.classList.add('leaf-loop');
            isAnimating = false;
        }
    }

    // Mulai animasi masuk
    animFrameId = requestAnimationFrame(animateEntrance);

    // Bersihkan
    window.addEventListener('beforeunload', function () {
        isAnimating = false;
        if (animFrameId) cancelAnimationFrame(animFrameId);
    });
});

// ============================================
// END OF JAVASCRIPT
// ============================================
