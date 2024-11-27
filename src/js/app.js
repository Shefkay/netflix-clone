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

// fag
document.querySelectorAll('.faq-item h3').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    const answer = item.nextElementSibling;

    if (answer) {
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    }
  });
});

