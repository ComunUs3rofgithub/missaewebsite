const slides = document.querySelector('.slides');
let index = 0;

document.querySelector('.prev').addEventListener('click', () => {
    index = (index > 0) ? index - 1 : 3; // Ajusta el índice
    slides.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
    index = (index < 3) ? index + 1 : 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
});
