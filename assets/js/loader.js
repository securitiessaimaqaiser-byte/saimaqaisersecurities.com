/* =========================================================
   LOADER.JS
   Page Load Animation Controller
   Saima Qaiser Securities
   ========================================================= */

(function () {
  "use strict";

  const loader = document.getElementById("site-loader");
  const site = document.getElementById("site-wrapper");

  if (!loader || !site) return;

  /* -----------------------------------------
     Accessibility: Reduced Motion
     ----------------------------------------- */
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function showSite() {
    loader.classList.add("loader-hide");

    setTimeout(() => {
      loader.style.display = "none";
      site.style.display = "block";
      site.classList.add("site-visible");
    }, prefersReducedMotion ? 0 : 600);
  }

  /* -----------------------------------------
     Primary Load Event
     ----------------------------------------- */
  window.addEventListener("load", () => {
    showSite();
  });

  /* -----------------------------------------
     Failsafe (max wait 4s)
     ----------------------------------------- */
  setTimeout(() => {
    if (loader.style.display !== "none") {
      showSite();
    }
  }, 4000);

})();
