/* =========================================================
   SCROLL & UI ANIMATIONS
   Project: Saima Qaiser Securities
   ========================================================= */

(function () {
  "use strict";

  /**
   * Respect reduced motion preferences (WCAG)
   */
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    document.documentElement.classList.add("reduce-motion");
    return;
  }

  /**
   * Scroll Reveal using IntersectionObserver
   */
  const revealElements = document.querySelectorAll(
    "[data-animate]"
  );

  if (!("IntersectionObserver" in window)) {
    // Fallback: show everything immediately
    revealElements.forEach(el => el.classList.add("animate-in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // Optional stagger delay
          const delay = el.getAttribute("data-delay");
          if (delay) {
            el.style.animationDelay = `${delay}ms`;
          }

          el.classList.add("animate-in");
          obs.unobserve(el);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  revealElements.forEach(el => observer.observe(el));

  /**
   * Header subtle shadow on scroll (video polish)
   */
  const header = document.querySelector("header");

  if (header) {
    let lastScroll = 0;

    window.addEventListener(
      "scroll",
      () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 8) {
          header.classList.add("header-scrolled");
        } else {
          header.classList.remove("header-scrolled");
        }

        lastScroll = currentScroll;
      },
      { passive: true }
    );
  }

  /**
   * Button press micro-interaction
   */
  document.addEventListener("click", event => {
    const btn = event.target.closest("button, .btn");
    if (!btn) return;

    btn.classList.add("btn-pressed");
    setTimeout(() => {
      btn.classList.remove("btn-pressed");
    }, 160);
  });

})();
