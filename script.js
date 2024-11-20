//funcionalidad_carrusel
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}
function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
});
showSlide(currentIndex);
//funcionalidad_participantes_carrusel
document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carousel = document.querySelector('.carousel');
    const categoryWidth = categories[0].offsetWidth + 30;
    let currentIndex = 0;
    if (prevBtn && nextBtn) {
        function updateCategory() {
            categories.forEach((category, index) => {
                category.classList.remove('active');
                if (index === currentIndex) {
                    category.classList.add('active');
                }
            });
            carousel.style.transform = `translateX(-${currentIndex * categoryWidth}px)`;
        }
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? categories.length - 1 : currentIndex - 1;
            updateCategory();
        });
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === categories.length - 1) ? 0 : currentIndex + 1;
            updateCategory();
        });
        updateCategory();
    } else {
        console.error('No se pudo encontrar el botón anterior o siguiente.');
    }
});
//funcionalidad_de_notificaciones
const toggleButton = document.getElementById("toggleButton");
const content = document.getElementById("content");
toggleButton.addEventListener("click", () => {
    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        content.classList.add("visible");
        toggleButton.textContent = "Ocultar contenido";
    } else {
        content.classList.remove("visible");
        content.classList.add("hidden");
        toggleButton.textContent = "Mostrar contenido";
    }
});