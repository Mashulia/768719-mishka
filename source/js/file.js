var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var link = document.querySelector('.js-modal');
var buyButton = document.querySelector('.catalog__modal');
var popup = document.querySelector('.modal');
// var overlay = document.querySelector(".modal__overlay");

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navToggle.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navToggle.classList.remove('main-nav--opened');
  }
});

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});

if (buyButton) {
  for(var i = 0; i < buyButton.length; i++) {
    buyButton[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.add('modal-show');
    });
  }
}

window. addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
    }
  }
});

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});
