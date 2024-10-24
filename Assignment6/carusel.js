
const carousel = document.querySelector('.carousel-list');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');


let currentIndex = 0;
const itemWidth = 140; 

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarouselPosition();
  }
});

rightArrow.addEventListener('click', () => {
  if (currentIndex < carousel.children.length - Math.floor(carousel.clientWidth / itemWidth)) {
    currentIndex++;
    updateCarouselPosition();
  }
});
function updateCarouselPosition() {
  const offset = -currentIndex * itemWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}
