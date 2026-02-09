/**
 * =====================================================
 * MAIN NAVIGATION SCRIPT
 * Mobile + Desktop | Accessible | GitHub Pages Safe
 * =====================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".main-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const dropdownParents = document.querySelectorAll(".nav-dropdown > a");

  /* =====================================================
     MOBILE NAV TOGGLE
  ===================================================== */

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen.toString());
    });
  }

  /* =====================================================
     DROPDOWN TOGGLE (MOBILE ONLY)
  ===================================================== */

  dropdownParents.forEach((trigger) => {
    const parentLi = trigger.parentElement;
    const dropdown = parentLi.querySelector(".dropdown-menu");

    if (!dropdown) return;

    // Ensure ARIA roles
    trigger.setAttribute("aria-haspopup", "true");
    trigger.setAttribute("aria-expanded", "false");

    trigger.addEventListener("click", (e) => {
      // Mobile only behavior
      if (window.innerWidth > 768) return;

      e.preventDefault();

      const isOpen = parentLi.classList.toggle("open");
      trigger.setAttribute("aria-expanded", isOpen.toString());
    });
  });

  /* =====================================================
     CLOSE MENUS ON CLICK OUTSIDE
  ===================================================== */

  document.addEventListener("click", (e) => {
    if (!nav || !navToggle) return;

    const clickedInsideNav = nav.contains(e.target);
    const clickedToggle = navToggle.contains(e.target);

    if (!clickedInsideNav && !clickedToggle) {
      closeAllMenus();
    }
  });

  /* =====================================================
     ESC KEY HANDLING
  ===================================================== */

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllMenus();
      navToggle?.focus();
    }
  });

  /* =====================================================
     WINDOW RESIZE CLEANUP
  ===================================================== */

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeAllMenus();
    }
  });

  /* =====================================================
     HELPERS
  ===================================================== */

  function closeAllMenus() {
    // Close mobile nav
    if (nav && nav.classList.contains("open")) {
      nav.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    }

    // Close dropdowns
    dropdownParents.forEach((trigger) => {
      const parentLi = trigger.parentElement;
      parentLi.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    });
  }
});
