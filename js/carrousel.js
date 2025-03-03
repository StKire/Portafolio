let index = 0;

const slides = document.querySelectorAll('img');

const totalSlides = slides.length;

function showSlide() {

    slides.forEach((slide, i) => {

        slide.style.display = i === index ? 'block' : 'none';

    });

    index = (index + 1) % totalSlides;

}

setInterval(showSlide, 5000);

showSlide();