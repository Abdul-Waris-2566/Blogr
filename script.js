// "use strict";

const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close");
const openMenu = document.querySelector(".open");
const navigation = document.querySelector(".nav");

// mobileMenu.style.background = "green";
// navigation.style.opacity = "1";
// navigation.style.transform = "translate(-50%, -45%)";
// navigation.style.transition = "all 0.5s";

openMenu.addEventListener("click", function () {
  navigation.classList.toggle("animation");
  closeMenu.classList.remove("hide");
  openMenu.classList.add("hide");
});
closeMenu.addEventListener("click", function () {
  navigation.classList.toggle("animation");
  closeMenu.classList.add("hide");
  openMenu.classList.remove("hide");
});
