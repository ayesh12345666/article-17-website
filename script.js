const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('nav').classList.remove('open');
  });
});