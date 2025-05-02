const swup = new Swup();
//swup hooks
swup.hooks.on("page:view", (visit) => {
  const navMobile = document.getElementsByClassName("navMobile")[0];
  const hamburger = document.getElementById("hamburger");

  if (
    navMobile &&
    hamburger &&
    window.getComputedStyle(navMobile).display !== "none"
  ) {
    hamburger.click();
  }
});
