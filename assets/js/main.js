/* ==========================================================
   main.js
   Purpose: Global site controller (Production Ready)
   ========================================================== */

(function () {
  "use strict";

  /* ------------------------------------------
     DOM READY HELPER
  ------------------------------------------ */
  const onReady = (fn) => {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  };

  onReady(() => {
    initHeader();
    initScrollToTop();
    initSmoothScroll();
    initLazyImages();
    initExternalLinks();
    initPerformanceHints();
  });

  /* ------------------------------------------
     HEADER / NAVIGATION
  ------------------------------------------ */
  function initHeader() {
    const header = document.querySelector("header");
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 80) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      // Optional hide-on-scroll
      if (currentScroll > lastScroll && currentScroll > 200) {
        header.classList.add("header-hidden");
      } else {
        header.classList.remove("header-hidden");
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  /* ------------------------------------------
     SCROLL TO TOP BUTTON
  ------------------------------------------ */
  function initScrollToTop() {
    const btn = document.querySelector(".scroll-top");
    if (!btn) return;

    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* ------------------------------------------
     SMOOTH ANCHOR SCROLL
  ------------------------------------------ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", e => {
        const target = document.querySelector(anchor.getAttribute("href"));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  /* ------------------------------------------
     LAZY LOAD IMAGES (Fallback-safe)
  ------------------------------------------ */
  function initLazyImages() {
    const images = document.querySelectorAll("img[data-src]");
    if (!images.length) return;

    if (!("IntersectionObserver" in window)) {
      images.forEach(img => loadImage(img));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        loadImage(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "200px" });

    images.forEach(img => observer.observe(img));
  }

  function loadImage(img) {
    img.src = img.dataset.src;
    img.onload = () => img.classList.add("loaded");
  }

  /* ------------------------------------------
     EXTERNAL LINKS SAFETY
  ------------------------------------------ */
  function initExternalLinks() {
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
      link.setAttribute("rel", "noopener noreferrer");
    });
  }

  /* ------------------------------------------
     PERFORMANCE OPTIMIZATIONS
  ------------------------------------------ */
  function initPerformanceHints() {
    // Reduce motion support
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.add("reduce-motion");
    }

    // Prevent 300ms delay on mobile
    document.addEventListener("touchstart", () => {}, { passive: true });
  }

})();
