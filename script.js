// 1. Dropdown Toggle
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown')
    .forEach(drop => {
      drop.addEventListener('click', () => {
        drop.classList.toggle('open');
        drop.nextElementSibling.classList.toggle('show');
      });
    });

  // 2. Scroll-Reveal for .fade-in elements
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.fade-in')
    .forEach(el => observer.observe(el));
});
