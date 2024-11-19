function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');

  // Toggle 'open' class for menu and icon
  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
}
