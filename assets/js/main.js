(() => {
  "use strict";

  /* =====================================================
     Footer Year
  ===================================================== */

  const setCurrentYear = () => {
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  };

  /* =====================================================
     Smooth Scroll (Internal Anchors)
  ===================================================== */

  const enableSmoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (targetId && targetId.length > 1) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });
  };

  /* =====================================================
     Accessible Navbar (Desktop + Mobile)
  ===================================================== */

  const initAccessibleNavbar = () => {
    const nav = document.querySelector(".main-nav");
    const navToggle = document.querySelector(".nav-toggle");
    const dropdowns = document.querySelectorAll(".nav-dropdown");

    if (!nav) return;

    /* ---------- Helpers ---------- */

    const closeAllDropdowns = () => {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("open");
        const trigger = dropdown.querySelector("a");
        if (trigger) {
          trigger.setAttribute("aria-expanded", "false");
        }
      });
    };

    const closeMobileNav = () => {
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        navToggle?.setAttribute("aria-expanded", "false");
      }
      closeAllDropdowns();
    };

    /* =====================================================
       Mobile Nav Toggle (if exists)
    ===================================================== */

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen.toString());
      });
    }

    /* =====================================================
       Dropdown Logic (Hover + Click + Keyboard)
    ===================================================== */

    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector("a");
      const menu = dropdown.querySelector(".dropdown-menu");
      const items = menu ? menu.querySelectorAll("a") : [];

      if (!trigger || !menu) return;

      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");

      /* ---------- Desktop Hover ---------- */

      dropdown.addEventListener("mouseenter", () => {
        if (window.innerWidth <= 768) return;
        closeAllDropdowns();
        trigger.setAttribute("aria-expanded", "true");
      });

      dropdown.addEventListener("mouseleave", () => {
        if (window.innerWidth <= 768) return;
        trigger.setAttribute("aria-expanded", "false");
      });

      /* ---------- Mobile Click ---------- */

      trigger.addEventListener("click", (event) => {
        if (window.innerWidth > 768) return;

        event.preventDefault();
        const isOpen = dropdown.classList.toggle("open");
        trigger.setAttribute("aria-expanded", isOpen.toString());
      });

      /* ---------- Keyboard: Trigger ---------- */

      trigger.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "Enter":
          case " ":
          case "ArrowDown":
            event.preventDefault();
            closeAllDropdowns();
            dropdown.classList.add("open");
            trigger.setAttribute("aria-expanded", "true");
            if (items.length > 0) items[0].focus();
            break;

          case "Escape":
            trigger.setAttribute("aria-expanded", "false");
            dropdown.classList.remove("open");
            trigger.focus();
            break;

          default:
            break;
        }
      });

      /* ---------- Keyboard: Menu Items ---------- */

      items.forEach((item, index) => {
        item.addEventListener("keydown", (event) => {
          switch (event.key) {
            case "ArrowDown":
              event.preventDefault();
              if (index < items.length - 1) {
                items[index + 1].focus();
              }
              break;

            case "ArrowUp":
              event.preventDefault();
              if (index > 0) {
                items[index - 1].focus();
              } else {
                trigger.focus();
              }
              break;

            case "Escape":
              event.preventDefault();
              trigger.setAttribute("aria-expanded", "false");
              dropdown.classList.remove("open");
              trigger.focus();
              break;

            case "Tab":
              if (index === items.length - 1) {
                trigger.setAttribute("aria-expanded", "false");
                dropdown.classList.remove("open");
              }
              break;

            default:
              break;
          }
        });
      });
    });

    /* =====================================================
       Global Close Handlers
    ===================================================== */

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".site-header")) {
        closeMobileNav();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMobileNav();
        navToggle?.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMobileNav();
      }
    });
  };

  /* =====================================================
     Init on DOM Ready
  ===================================================== */

  document.addEventListener("DOMContentLoaded", () => {
    setCurrentYear();
    enableSmoothScroll();
    initAccessibleNavbar();
  });
})();
