// Select DOM elements
const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
  });