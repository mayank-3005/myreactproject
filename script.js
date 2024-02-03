const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('nav-show');
});