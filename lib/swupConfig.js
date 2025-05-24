const swup = new Swup();

function loadScript(src) {
  const existingScript = document.querySelector(`script[src="${src}"]`);
  if (existingScript) {
    existingScript.remove(); // Borra el anterior si ya existe
  }

  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
}

swup.hooks.on("page:view", (visit) => {
  if (visit?.to?.href.includes("/agenda")) {
    loadScript("/lib/fullcalendar/dist/index.global.min.js");
    loadScript("/lib/fullcalendar/packages/core/locales/es.global.js");
    console.log("agenda");
  }
  loadScript("/lib/shareButton.js");
  loadScript("/lib/navButton.js");
});
