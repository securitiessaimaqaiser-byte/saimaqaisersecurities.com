/* =========================================================
   GLOBAL PAGE LOADER
   Author: Final Production Build
   Purpose:
   - Smooth page loading experience
   - Prevents FOUC (Flash of Unstyled Content)
   - GitHub Pages compatible
   - Accessible & failsafe
   ========================================================= */

(function () {
  "use strict";

  const LOADER_ID = "page-loader";
  const BODY_LOADING_CLASS = "loading";
  const FAILSAFE_TIMEOUT = 5000; // 5 seconds

  /**
   * Create loader HTML dynamically
   */
  function createLoader() {
    if (document.getElementById(LOADER_ID)) return;

    const loader = document.createElement("div");
    loader.id = LOADER_ID;
    loader.setAttribute("aria-hidden", "true");

    loader.innerHTML = `
      <div class="loader-backdrop"></div>
      <div class="loader-spinner" role="status" aria-label="Loading"></div>
    `;

    document.body.appendChild(loader);
    document.body.classList.add(BODY_LOADING_CLASS);
  }

  /**
   * Hide and remove loader
   */
  function hideLoader() {
    const loader = document.getElementById(LOADER_ID);
    if (!loader) return;

    loader.classList.add("loader-hide");

    setTimeout(() => {
      if (loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
      document.body.classList.remove(BODY_LOADING_CLASS);
    }, 500);
  }

  /**
   * Initialize loader as early as possible
   */
  function initLoader() {
    if (document.readyState === "loading") {
      createLoader();
    }
  }

  /**
   * Ensure loader is removed once page is fully loaded
   */
  function onPageLoad() {
    hideLoader();
  }

  /**
   * Failsafe: Remove loader even if load event fails
   */
  function failsafeRemove() {
    setTimeout(() => {
      hideLoader();
    }, FAILSAFE_TIMEOUT);
  }

  /**
   * Reduced motion support (accessibility)
   */
  function handleReducedMotion() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) {
      const loader = document.getElementById(LOADER_ID);
      if (loader) {
        loader.classList.add("reduced-motion");
      }
    }
  }

  /* =========================================================
     EVENT BINDINGS
     ========================================================= */

  initLoader();

  window.addEventListener("load", () => {
    handleReducedMotion();
    onPageLoad();
  });

  failsafeRemove();
})();
