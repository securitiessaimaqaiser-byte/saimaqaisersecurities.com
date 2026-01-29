window.addEventListener("load", () => {
  const loader = document.getElementById("site-loader");
  const site = document.getElementById("site-wrapper");

  site.style.display = "none";

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity .6s ease";

    setTimeout(() => {
      loader.style.display = "none";
      site.style.display = "block";
    }, 600);

  }, 1400);
});
