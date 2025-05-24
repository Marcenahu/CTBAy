const swup = new Swup();

function loadScript(src) {
  const existingScript = document.querySelector(`script[src="${src}"]`);
  if (existingScript) {
    existingScript.remove(); // Borra el anterior si ya existe
  }

  const script = document.createElement("script");
  script.src = src;
  document.getElementsByTagName("main")[0].appendChild(script);
}

function navButton() {
  const navMobile = document.getElementsByClassName("navMobile")[0];
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const navbar = document.getElementById("navbar");

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
}

swup.hooks.on("page:view", (visit) => {
  navButton();

  if (visit?.to?.url === "/agenda/") {
    loadScript("/lib/fullcalendar/dist/index.global.min.js");
    loadScript("/lib/fullcalendar/packages/core/locales/es.global.js");
    loadScript("/lib/calendarInit.js");/
  }
});
