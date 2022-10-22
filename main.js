const slides = document.querySelectorAll('.slide');
slides.forEach(slide => {
    slide.addEventListener('click', () => {
        clear();
        slide.classList.add('active');
    });
});
const clear =  () => {
    slides.forEach(el => {
        el.classList.remove('active');
    });
};