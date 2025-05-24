const swup = new Swup();

function loadScript(src, callback) {
  const existingScript = document.querySelector(`script[src="${src}"]`);
  if (existingScript) {
    existingScript.remove(); // Borra el anterior si ya existe
  }

  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.onload = callback || function () {};
  document.body.appendChild(script);
}

swup.hooks.on("page:view", (visit) => {
  shareButton();
  const navMobile = document.getElementsByClassName("navMobile")[0];
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const navbar = document.getElementById("navbar");
  loadScript("/lib/fullCalendar/dist/index.global.min.js", function () {
    console.log("Script externo cargado");
    // Si necesitás inicializar algo del script, hacelo acá
  });

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
});

function shareButton() {
  const btn = document.getElementById("share");
  if (btn) {
    btn.addEventListener("click", () => {
      if (navigator.share) {
        navigator
          .share({
            url: window.location.href,
          })
          .catch(console.error);
      } else {
        alert("Tu navegador no soporta compartir directamente.");
      }
    });
  }
}
shareButton();
