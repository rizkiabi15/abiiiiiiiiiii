// Animasi sederhana saat scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#0f172a';
        nav.style.boxShadow = '0 2px 10px rgba(14, 171, 233, 0.5)';
    } else {
        nav.style.backgroundColor = '#1e293b';
        nav.style.boxShadow = 'none';
    }
});

// Handling Form Submission (Mockup)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim (hanya simulasi).');
    contactForm.reset();
});

// Mobile Nav Toggle (Opsional jika ingin menambah menu burger)
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
}