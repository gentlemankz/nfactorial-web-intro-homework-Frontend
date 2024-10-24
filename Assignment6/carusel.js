const carousel = document.querySelector('.carousel-list');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
const itemWidth = 140;
const visibleItems = Math.floor(document.querySelector('.carousel').clientWidth / itemWidth);
const maxIndex = carousel.children.length - visibleItems;

const updateCarouselPosition = () => {
  carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
};

leftArrow.addEventListener('click', () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
  updateCarouselPosition();
});

rightArrow.addEventListener('click', () => {
  currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
  updateCarouselPosition();
});

updateCarouselPosition();
