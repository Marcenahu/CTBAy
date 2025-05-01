function share() {
  if (navigator.share) {
    navigator
      .share({
        url: window.location.href,
      })
      .catch(console.error);
  } else {
    alert("Tu navegador no soporta compartir directamente.");
  }
}
