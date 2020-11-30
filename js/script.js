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
    menuToggle.classList.remove('menu-icon-active');
    mobileNavContainer.classList.remove('mobile-container-active');
    body.classList.remove('lock');
    nav.classList.remove('nav-menu-active');
}

mobileNavContainer.onclick = function(){
    menuToggle.classList.remove('menu-icon-active');
    mobileNavContainer.classList.remove('mobile-container-active');
    body.classList.remove('lock');
    nav.classList.remove('nav-menu-active');
}

// Popups

const modal = document.querySelector('.modal')
const openModalButton = document.querySelectorAll('a[href="#"]')
const closeModalButton = document.querySelector('.modal__close')
const overlay = document.querySelector('.modal__overlay')

function modalWindow() {
    function getBodyScrollTop() {
      return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
    }
openModalButton.forEach(function (entry) {
  entry.addEventListener('click', e => {
  e.preventDefault();

  body.dataset.scrollY = getBodyScrollTop()
  body.style.top = `-${body.dataset.scrollY}px`
  
  modal.classList.add('modal--open')
  body.classList.add('body-lock')
});
});


closeModalButton.addEventListener('click', e => {
  e.preventDefault()
  
  modal.classList.remove('modal--open')
  body.classList.remove('body-lock')
  window.scrollTo(0,body.dataset.scrollY)
})

overlay.onclick = function(){
    body.classList.remove('body-lock');
    body.classList.remove('lock');
    modal.classList.remove('modal--open')
    window.scrollTo(0,body.dataset.scrollY)
}
}
modalWindow();

const form = document.querySelector('.open-window')

function getBodyScrollTop() {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
}
form.addEventListener('click', e => {
  e.preventDefault()

  body.dataset.scrollY = getBodyScrollTop()
  body.style.top = `-${body.dataset.scrollY}px`

  modal.classList.add('modal--open')
  body.classList.add('body-lock')
});


closeModalButton.addEventListener('click', e => {
  e.preventDefault()

  modal.classList.remove('modal--open')
  body.classList.remove('body-lock')
  window.scrollTo(0,body.dataset.scrollY)
})

  overlay.onclick = function(){
  body.classList.remove('body-lock');
  body.classList.remove('lock');
  modal.classList.remove('modal--open')
  window.scrollTo(0,body.dataset.scrollY)
}

// Phone
$(function(){
  $('#phone').mask('+7(999) 999-99-99');
})

// // Slider
const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
  loop: true,
  speed: 850,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})