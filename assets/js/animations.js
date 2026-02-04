/* ==========================================================
   animations.js
   Purpose: Scroll-based UI animations (performance optimized)
   Author: Final Production Version
   ========================================================== */

(function () {
  "use strict";

  /* ------------------------------------------
     CONFIGURATION
  ------------------------------------------ */
  const CONFIG = {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.15,
    animationClass: "animate",
    once: true // animate only once
  };

  /* ------------------------------------------
     SELECTORS
  ------------------------------------------ */
  const animatedElements = document.querySelectorAll(
    "[data-animate], .fade-in, .slide-up, .slide-left, .slide-right, .scale-in"
  );

  if (!animatedElements.length) return;

  /* ------------------------------------------
     FALLBACK FOR OLD BROWSERS
  ------------------------------------------ */
  if (!("IntersectionObserver" in window)) {
    animatedElements.forEach(el => el.classList.add(CONFIG.animationClass));
    return;
  }

  /* ------------------------------------------
     OBSERVER CALLBACK
  ------------------------------------------ */
  const onIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      el.classList.add(CONFIG.animationClass);

      if (CONFIG.once) observer.unobserve(el);
    });
  };

  /* ------------------------------------------
     OBSERVER INIT
  ------------------------------------------ */
  const observer = new IntersectionObserver(onIntersection, CONFIG);

  animatedElements.forEach(el => {
    // Optional delay support
    const delay = el.getAttribute("data-delay");
    if (delay) {
      el.style.animationDelay = `${delay}ms`;
    }

    observer.observe(el);
  });

  /* ------------------------------------------
     PAGE VISIBILITY OPTIMIZATION
  ------------------------------------------ */
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      animatedElements.forEach(el => {
        el.style.animationPlayState = "paused";
      });
    } else {
      animatedElements.forEach(el => {
        el.style.animationPlayState = "running";
      });
    }
  });

})();
