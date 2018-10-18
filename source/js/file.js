var promoButton = document.querySelectorAll(".promo__button");
var catalogButton = document.querySelectorAll(".catalog__cart");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".modal__overlay");

promoButton.addEventListener('click', function() {
  evt.preventDefault();
  popup.classList.add("modal--show");
  overlay.classList.add("modal__overlay--show");
});

catalogButton.addEventListener('click', function() {
  evt.preventDefault();
  popup.classList.add("modal--show");
  overlay.classList.add("modal__overlay--show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal--show")) {
      evt.preventDefault();
      popup.classList.remove("modal--show");
      overlay.classList.remove("modal__overlay--show");
    }
  }
});
