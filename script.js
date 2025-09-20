// Cursor effect
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
});

// Skill bar animation
const skillFills = document.querySelectorAll('.skill-fill');
window.addEventListener('scroll', () => {
  skillFills.forEach((fill) => {
    const rect = fill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fill.style.width = fill.getAttribute('data-fill');
    }
  });
});

// Smooth scroll for nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
