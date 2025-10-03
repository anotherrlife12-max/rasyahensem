// app.js
// Vanilla JavaScript for interactivity: lightbox, carousel, form stub, smooth scroll.
// Supports keyboard navigation for accessibility.
// Developers: Enhance lightbox/carousel for full keyboard support (arrow keys, Esc).
// For form, add real submission logic if backend is added.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to section
    window.scrollToSection = function(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    // Lightbox functionality
    let currentImgIndex = 0;
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    window.openLightbox = function(img) {
       