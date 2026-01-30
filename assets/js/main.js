/* =========================================================
   MAIN CONTROLLER
   Project: Saima Qaiser Securities
   ========================================================= */

(function () {
  "use strict";

  /* ===============================
     DOM READY
     =============================== */

  document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       HEADER & DROPDOWNS
       =============================== */

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector(".dropdown-toggle");

      if (!trigger) return;

      trigger.addEventListener("click", e => {
        e.preventDefault();

        // Close other dropdowns
        dropdowns.forEach(d => {
          if (d !== dropdown) d.classList.remove("open");
        });

        dropdown.classList.toggle("open");
      });
    });

    // Close dropdowns on outside click
    document.addEventListener("click", e => {
      dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove("open");
        }
      });
    });


    /* ===============================
       MOBILE HAMBURGER MENU
       =============================== */

    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("open");
        document.body.classList.toggle("menu-open");
      });
    }


    /* ===============================
       MOBILE DROPDOWNS
       =============================== */

    const mobileDropdowns = document.querySelectorAll(
      ".mobile-menu .dropdown"
    );

    mobileDropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      if (!toggle) return;

      toggle.addEventListener("click", e => {
        e.preventDefault();
        dropdown.classList.toggle("open");
      });
    });


    /* ===============================
       SMOOTH SCROLL (ANCHORS)
       =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });


    /* ===============================
       ACCESSIBILITY ENHANCEMENTS
       =============================== */

    // Keyboard focus for dropdowns
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        dropdowns.forEach(d => d.classList.remove("open"));
        if (mobileMenu) mobileMenu.classList.remove("open");
      }
    });


    /* ===============================
       FOOTER YEAR AUTO-UPDATE
       =============================== */

    const yearEl = document.querySelector(".current-year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

  });

})();
