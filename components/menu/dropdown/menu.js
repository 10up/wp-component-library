var menuToggle = document.querySelector('.site-menu-toggle'),
    menu       = document.querySelector('.primary-menu');

menuToggle.onclick = function() {
  menu.classList.toggle('is-active');
}