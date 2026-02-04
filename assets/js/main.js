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
     Accessible Navbar Dropdowns (Keyboard + ARIA)
  ===================================================== */

  const initAccessibleDropdowns = () => {
    const dropdowns = document.querySelectorAll(".nav-dropdown");

    const closeAllDropdowns = () => {
      dropdowns.forEach((dropdown) => {
        const trigger = dropdown.querySelector("a");
        if (trigger) {
          trigger.setAttribute("aria-expanded", "false");
        }
      });
    };

    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector("a");
      const menu = dropdown.querySelector(".dropdown-menu");
      const items = menu ? menu.querySelectorAll("a") : [];

      if (!trigger || !menu) return;

      /* ---------- Mouse interactions ---------- */

      dropdown.addEventListener("mouseenter", () => {
        closeAllDropdowns();
        trigger.setAttribute("aria-expanded", "true");
      });

      dropdown.addEventListener("mouseleave", () => {
        trigger.setAttribute("aria-expanded", "false");
      });

      /* ---------- Keyboard: trigger ---------- */

      trigger.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "Enter":
          case " ":
          case "ArrowDown":
            event.preventDefault();
            closeAllDropdowns();
            trigger.setAttribute("aria-expanded", "true");
            if (items.length > 0) {
              items[0].focus();
            }
            break;

          case "Escape":
            trigger.setAttribute("aria-expanded", "false");
            trigger.focus();
            break;

          default:
            break;
        }
      });

      /* ---------- Keyboard: menu items ---------- */

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
              trigger.focus();
              break;

            case "Tab":
              if (index === items.length - 1) {
                trigger.setAttribute("aria-expanded", "false");
              }
              break;

            default:
              break;
          }
        });
      });
    });

    /* ---------- Close dropdowns when clicking outside ---------- */

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".nav-dropdown")) {
        closeAllDropdowns();
      }
    });
  };

  /* =====================================================
     Init on DOM Ready
  ===================================================== */

  document.addEventListener("DOMContentLoaded", () => {
    setCurrentYear();
    enableSmoothScroll();
    initAccessibleDropdowns();
  });
})();
