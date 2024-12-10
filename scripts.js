window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000); // Yükleme animasyonu 1 saniye sonra kaybolur
});
