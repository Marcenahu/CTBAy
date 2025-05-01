const toggle = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const main = document.getElementsByTagName("main")[0];

let scrollY = 0;

toggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");

  if (isOpen) {
    scrollY = window.scrollY;
    main.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "instant" });
  } else {
    main.classList.remove("hidden");
    window.scrollTo({ top: scrollY, behavior: "instant" });
  }
});
