const navbarNav = document.querySelector(".navbar-nav");
const hamburgerButton = document.querySelector("#hamburger-button");
const closeButton = document.querySelector("#close-button");
const copyright = document.querySelector(".copyright");

copyright.innerHTML = "© " + new Date().getFullYear() + " Loopstudios. All rights reserved.";

hamburgerButton.onclick = () => {
  navbarNav.classList.toggle("show-nav");
}

closeButton.onclick = () => {
  navbarNav.classList.toggle("show-nav");
}