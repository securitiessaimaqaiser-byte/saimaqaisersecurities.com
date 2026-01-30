/**
 * Loader timing matched to video feel
 * Slightly delayed reveal for polish
 */

window.addEventListener("load", () => {
  const loader = document.getElementById("site-loader");
  const site = document.getElementById("site-wrapper");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
      loader.style.display = "none";
      site.style.display = "block";
      document.body.classList.remove("no-scroll");
    }, 400);
  }, 1800); // matches video pacing
});
