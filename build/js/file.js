var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var buyButton = document.querySelectorAll('.js-modal');
var popup = document.querySelector('.modal');
var overlay = document.querySelector('.modal__overlay');

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

for (var i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.toggle('modal--closed');
  });
}

modalOverlay.addEventListener('click', function(event) {
  modal.classList.add('modal--closed');
});
