const swup = new Swup();
//swup hooks
swup.hooks.on("page:view", (visit) => {
  githubNavPatch();
  shareButton();
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
