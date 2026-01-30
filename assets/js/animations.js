/* =========================================================
   ANIMATIONS.JS
   Scroll Reveal & Entrance Animations
   Saima Qaiser Securities
   ========================================================= */

(function () {
  "use strict";

  /* -----------------------------------------
     Reduced Motion Check (Accessibility)
     ----------------------------------------- */
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    document.querySelectorAll(".reveal").forEach(el => {
      el.classList.add("is-visible");
    });
    return;
  }

  /* -----------------------------------------
     Intersection Observer Setup
     ----------------------------------------- */
  const revealElements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    // Fallback: show everything immediately
    revealElements.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -80px 0px",
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;

      /* Stagger delay support */
      if (el.dataset.delay) {
        el.style.transitionDelay = `${el.dataset.delay}ms`;
      }

      el.classList.add("is-visible");
      observer.unobserve(el);
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  /* -----------------------------------------
     Hero Animation Sync (on load)
     ----------------------------------------- */
  window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    hero.classList.add("is-visible");
  });

})();
