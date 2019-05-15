
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.contains('menu--open')
  ? menu.classList.remove('menu--open')
  : menu.classList.add('menu--open');
  // console.log(menu);
}


// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.header .menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);