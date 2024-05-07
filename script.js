// Improved script for highlighting active section on scroll

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionIsVisible = window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight;
    if (sectionIsVisible) {
      currentSection = section.id;
    }
  });

  // Update active class only if it changed
  if (currentSection !== document.body.dataset.currentSection) {
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(currentSection).classList.add('active');
    document.body.dataset.currentSection = currentSection;
  }
});