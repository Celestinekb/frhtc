// JavaScript for generating particles
const particlesContainer = document.querySelector('.particles');

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  const size = Math.random() * 8 + 8;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.animationDuration = `${Math.random() * 2 + 2}s`;
  particlesContainer.appendChild(particle);

  // Remove particle after animation ends
  particle.addEventListener('animationend', () => {
    particle.remove();
  });
}

setInterval(createParticle, 100);