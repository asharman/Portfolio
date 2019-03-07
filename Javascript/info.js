// Carousel

const slides = document.querySelectorAll('.photo-item');
const arrows = document.querySelectorAll('.arrow');
let carouselCount = 0;

slide = () => {
  switch (carouselCount) {
    case -100:
      carouselCount = 200;
      break;
    case 300:
      carouselCount = 0;
      break;
    default:
      break;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].setAttribute('style', `transform:translateX(-${carouselCount}%)`);
  }
}

goBack = (e) => {
  e.preventDefault();
  carouselCount -= 100;
  slide();
}

goForward = e => {
  e.preventDefault();
  carouselCount += 100;
  slide();
}

arrows[0].addEventListener('click', goBack);
arrows[1].addEventListener('click', goForward)
