let navMobile = document.getElementsByClassName("navMobile")[0];
let hamburger = document.getElementById("hamburger");
let menu = document.getElementById("menu");
let navbar = document.getElementById("navbar");

if (
  navMobile &&
  hamburger &&
  window.getComputedStyle(navMobile).display !== "none" &&
  menu.classList.contains("open")
) {
  hamburger.click();
}
if (
  navbar &&
  window.getComputedStyle(navbar).display !== "none" &&
  navbar.querySelector("details[open]") !== null
) {
  navbar
    .querySelectorAll("details[open]")
    .forEach((el) => el.removeAttribute("open"));
}
