const slidesContainer = document.querySelector('main');
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;
let isHovered = false;

// Auto-scroll every 4 seconds
function autoScrollSlides() {
  if (isHovered) return;

  currentSlide = (currentSlide + 1) % totalSlides;
  slidesContainer.scrollTo({
    left: currentSlide * window.innerWidth,
    behavior: 'smooth'
  });
}

// Hover detection to pause scroll
slidesContainer.addEventListener('mouseenter', () => {
  isHovered = true;
});
slidesContainer.addEventListener('mouseleave', () => {
  isHovered = false;
});

// Start auto-scroll
setInterval(autoScrollSlides, 4000);
