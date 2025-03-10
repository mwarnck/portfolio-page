const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')
menuIcon.addEventListener('click', onClickHandler)

function onClickHandler () {
    navLinks.classList.toggle('active')
}
