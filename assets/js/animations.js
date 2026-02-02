/* =========================================================
   ANIMATIONS.JS — SCROLL & REVEAL EFFECTS
   Project: Saima Qaiser Securities
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     REDUCED MOTION SUPPORT (WCAG AA)
  ===================================================== */

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    document.querySelectorAll("[data-animate]").forEach(el => {
      el.classList.add("animate-visible");
    });
    return;
  }

  /* =====================================================
     INTERSECTION OBSERVER SETUP
  ===================================================== */

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -80px 0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  /* =====================================================
     OBSERVE ELEMENTS
     Usage in HTML:
     data-animate="fade"
     data-animate="slide-up"
     data-animate="slide-left"
     data-animate="slide-right"
  ===================================================== */

  document.querySelectorAll("[data-animate]").forEach(el => {
    observer.observe(el);
  });

});
