// carousel
document.addEventListener('DOMContentLoaded', () => {
  const treadingSlide = document.querySelector('.trending-slider');
  const leftButton = document.querySelector('.scroll-btn.left');
  const rightButton = document.querySelector('.scroll-btn.right');

  const scrollAmount = 200; // Adjust the scroll amount as needed

  leftButton.addEventListener('click', () => {
    treadingSlide.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightButton.addEventListener('click', () => {
    treadingSlide.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});


// FAQ
const faqs = document.querySelectorAll(".faq_item")

faqs.forEach((faq_item) => {
  faq_item.addEventListener("click", () => {
    faq_item.classList.toggle("active");
  });
});

