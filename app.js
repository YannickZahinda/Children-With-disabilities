const burgerMenu = document.getElementById('burger-menu');
const navBar = document.getElementById('nav-bar');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navBar.classList.toggle('active');
});
