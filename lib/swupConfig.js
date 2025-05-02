const swup = new Swup();
//swup hooks
swup.hooks.on("page:view", (visit) => {
  const navMobile = document.getElementsByClassName("navMobile")[0];
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (
    navMobile &&
    hamburger &&
    window.getComputedStyle(navMobile).display !== "none" &&
    menu.classList.contains("open")
  ) {
    hamburger.click();
  }
  githubNavPatch();
});
