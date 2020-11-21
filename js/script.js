const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-container');
const body = document.querySelector('body');
const nav = document.querySelector('.nav-menu');


menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-container-active');
    body.classList.toggle('lock');
    nav.classList.toggle('nav-menu-active');
}

nav.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-container-active');
    body.classList.toggle('lock');
    nav.classList.toggle('nav-menu-active');
}

mobileNavContainer.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-container-active');
    body.classList.toggle('lock');
    nav.classList.toggle('nav-menu-active');
}