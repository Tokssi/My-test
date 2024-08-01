// JavaScript for carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-item');
const dots = document.querySelectorAll('.dot');

function showSlide(slideIndex) {
    if (slideIndex >= slides.length) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = slideIndex;
    }

    slides.forEach((slide, index) => {
        slide.style.display = (index >= currentSlide && index < currentSlide + 6) ? 'block' : 'none';
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Initial display
showSlide(0);
