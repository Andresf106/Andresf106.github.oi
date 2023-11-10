let currentSlide = 1;

function changeSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide - 1].style.opacity = 0;
    currentSlide = slideNumber;
    slides[currentSlide - 1].style.opacity = 1;
}

// Automáticamente cambia de diapositiva cada 5 segundos (5000 ms)
setInterval(() => {
    let nextSlide = currentSlide % 3 + 1; // Circula entre 1, 2 y 3
    changeSlide(nextSlide);
}, 5000);
