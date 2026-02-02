/* =========================================================
   LOADER.JS — PAGE LOADING EXPERIENCE
   Project: Saima Qaiser Securities
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("pageLoader");

  if (!loader) return;

  /* =====================================================
     ACCESSIBILITY SETUP
  ===================================================== */

  loader.setAttribute("role", "status");
  loader.setAttribute("aria-live", "polite");
  loader.setAttribute("aria-label", "Loading content");

  /* =====================================================
     SAFETY TIMEOUT (PREVENT STUCK LOADER)
  ===================================================== */

  const MAX_WAIT = 3000; // 3 seconds fallback
  let loaderHidden = false;

  function hideLoader() {
    if (loaderHidden) return;
    loaderHidden = true;

    loader.classList.add("loader-hide");

    // Remove from DOM after animation
    setTimeout(() => {
      loader.remove();
    }, 600);
  }

  /* =====================================================
     MAIN LOAD EVENT
  ===================================================== */

  window.addEventListener("load", () => {
    requestAnimationFrame(() => {
      hideLoader();
    });
  });

  /* =====================================================
     FAILSAFE
  ===================================================== */

  setTimeout(() => {
    hideLoader();
  }, MAX_WAIT);
});
