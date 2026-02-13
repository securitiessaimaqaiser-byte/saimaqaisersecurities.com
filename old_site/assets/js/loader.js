/* =========================================================
   LOADER CONTROLLER
   Project: Saima Qaiser Securities
   Purpose: Initial page loading & refresh animation
   ========================================================= */

(function () {
  "use strict";

  const loader = document.getElementById("site-loader");

  if (!loader) return;

  /**
   * Hide loader after page fully loads
   */
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";

      document.body.classList.add("page-loaded");

      setTimeout(() => {
        loader.remove();
      }, 600);
    }, 300);
  });

  /**
   * Show loader on page refresh / navigation
   */
  window.addEventListener("beforeunload", () => {
    document.body.classList.remove("page-loaded");

    if (loader) {
      loader.style.opacity = "1";
      loader.style.pointerEvents = "auto";
    }
  });

})();
