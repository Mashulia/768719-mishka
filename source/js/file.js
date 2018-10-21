var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var promoButton = document.querySelectorAll('.promo__button');
var catalogButton = document.querySelectorAll('.catalog__cart');
var popup = document.querySelector('.modal');
var overlay = document.querySelector('.modal__overlay');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  // console.log(navMain.classList);
  // navMain.classList.toggle('main-nav--closed');
});
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navToggle.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navToggle.classList.remove('main-nav--opened');
  }
});

promoButton.addEventListener('click', function () {
  evt.preventDefault();
  popup.classList.add('modal--show');
  overlay.classList.add('modal__overlay--show');
});

catalogButton.addEventListener('click', function () {
  evt.preventDefault();
  popup.classList.add('modal--show');
  overlay.classList.add('modal__overlay--show');
});


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
      overlay.classList.remove('modal__overlay--show');
    }
  }
});
