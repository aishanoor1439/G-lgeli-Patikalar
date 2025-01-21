const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;

//slider next button
nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideNumber = (slideNumber + 1) % numberOfSlides;
    slides[slideNumber].classList.add('active');
});

//slider prev button
prevBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideNumber = (slideNumber - 1 + numberOfSlides) % numberOfSlides;
    slides[slideNumber].classList.add('active');
});

// header color change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 550) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//message button
document.getElementById('send-button').addEventListener('click', function () {
    Swal.fire({
        title: "We got your Message!",
        showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
            `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
            `
        }
    });
});