var navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle"),link=document.querySelector(".js-modal"),popup=document.querySelector(".modal"),overlay=document.querySelector(".modal__overlay");navMain.classList.remove("main-nav--nojs"),navToggle.addEventListener("click",function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navToggle.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navToggle.classList.remove("main-nav--opened"))}),link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show")}),window.onload=function(){if(popup)for(var e=document.querySelector(".js-buy--modal"),n=0;n<e.length;n++)e[n].addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal--show")})},window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&popup.classList.remove("modal-show"))}),overlay.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show")});