
function setCarouselSlide(index) {
    const carousel = new bootstrap.Carousel(document.getElementById('projectCarousel'));
    carousel.to(index);
}