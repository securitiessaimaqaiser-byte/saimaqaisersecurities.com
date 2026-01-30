/* =========================================================
   MAIN.JS
   Core UI Interactions
   Saima Qaiser Securities
   ========================================================= */

(function () {
  "use strict";

  /* ======================================================
     ELEMENT REFERENCES
     ====================================================== */

  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const dropdowns = document.querySelectorAll(".dropdown");
  const mobileDropdown = document.querySelector(".mobile-dropdown");
  const searchInput = document.getElementById("site-search");
  const sections = document.querySelectorAll("section[id]");

  /* ======================================================
     ACCESSIBILITY: REDUCED MOTION
     ====================================================== */

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ======================================================
     MOBILE MENU TOGGLE
     ====================================================== */

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", isOpen);

      document.body.style.overflow = isOpen ? "hidden" : "";
    });
  }

  /* ======================================================
     MOBILE DROPDOWN TOGGLE
     ====================================================== */

  if (mobileDropdown) {
    const trigger = mobileMenu.querySelector("a[href='#']");
    if (trigger) {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        mobileDropdown.classList.toggle("open");
      });
    }
  }

  /* ======================================================
     DESKTOP DROPDOWNS (HOVER + FOCUS)
     ====================================================== */

  dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector(".dropdown-menu");
    const link = dropdown.querySelector("a");

    if (!menu || !link) return;

    dropdown.addEventListener("mouseenter", () => {
      menu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", () => {
      menu.style.display = "none";
    });

    link.addEventListener("focus", () => {
      menu.style.display = "block";
    });

    link.addEventListener("blur", () => {
      menu.style.display = "none";
    });
  });

  /* ======================================================
     CLICK OUTSIDE TO CLOSE MENUS
     ====================================================== */

  document.addEventListener("click", (e) => {
    if (
      mobileMenu &&
      mobileMenu.classList.contains("open") &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    }
  });

  /* ======================================================
     ACTIVE NAV LINK ON SCROLL
     ====================================================== */

  function updateActiveLink() {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);

  /* ======================================================
     SEARCH INSIDE WEBSITE
     ====================================================== */

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();

      document.querySelectorAll("section").forEach(section => {
        const text = section.textContent.toLowerCase();
        section.style.display =
          text.includes(query) || query === "" ? "" : "none";
      });
    });
  }

  /* ======================================================
     TICKER PAUSE ON HOVER
     ====================================================== */

  const tickerTrack = document.querySelector(".ticker-track");
  if (tickerTrack && !prefersReducedMotion) {
    tickerTrack.addEventListener("mouseenter", () => {
      tickerTrack.style.animationPlayState = "paused";
    });

    tickerTrack.addEventListener("mouseleave", () => {
      tickerTrack.style.animationPlayState = "running";
    });
  }

  /* ======================================================
     ESC KEY CLOSE MOBILE MENU
     ====================================================== */

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu?.classList.contains("open")) {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
      hamburger?.focus();
    }
  });

})();
