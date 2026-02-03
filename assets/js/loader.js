/**
 * Global Page Loader Controller
 * ------------------------------------
 * - Prevents flicker
 * - Waits for full page + assets
 * - Smoothly fades out loader
 * - Safe for GitHub Pages
 */

(function () {
  const LOADER_HIDE_DELAY = 300; // ms after load (matches reference feel)

  function hideLoader() {
    const loader = document.querySelector(".site-loader");
    if (!loader) return;

    loader.classList.add("hidden");

    // Remove from DOM after animation finishes
    setTimeout(() => {
      if (loader && loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, 700); // must match CSS transition duration
  }

  // Ensure loader is visible immediately
  document.documentElement.classList.add("loading");

  // When full page (images, fonts, etc.) is loaded
  window.addEventListener("load", function () {
    setTimeout(hideLoader, LOADER_HIDE_DELAY);
  });

})();
