const toggle = document.getElementById("hamburger");
const menu = document.getElementById("menu");
let scrollY = 0;

toggle.addEventListener("click", () => {
  const main = document.getElementsByTagName("main")[0];
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
