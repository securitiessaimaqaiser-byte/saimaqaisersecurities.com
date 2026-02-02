/* =========================================================
   MAIN.JS — CORE INTERACTIONS
   Project: Saima Qaiser Securities
   Purpose: Navigation & UI behavior (video-accurate)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     ELEMENT REFERENCES
  ================================ */

  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-menu > li > a");


  /* ===============================
     MOBILE HAMBURGER TOGGLE
  ================================ */

  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";

    hamburger.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("active");
    navMenu.classList.toggle("mobile-nav");

    document.body.classList.toggle("no-scroll", !expanded);
  });


  /* ===============================
     MOBILE DROPDOWN TOGGLE
  ================================ */

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const parent = link.parentElement;
      const dropdown = parent.querySelector(".dropdown-menu");

      // Only intercept on mobile
      if (window.innerWidth <= 768 && dropdown) {
        e.preventDefault();

        parent.classList.toggle("open");

        // Close other open dropdowns
        document.querySelectorAll(".nav-menu li.open").forEach(item => {
          if (item !== parent) {
            item.classList.remove("open");
          }
        });
      }
    });
  });


  /* ===============================
     CLOSE MENU ON RESIZE
  ================================ */

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      nav.classList.remove("active");
      navMenu.classList.remove("mobile-nav");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");

      document.querySelectorAll(".nav-menu li.open").forEach(item => {
        item.classList.remove("open");
      });
    }
  });


  /* ===============================
     CLOSE MENU ON LINK CLICK (MOBILE)
  ================================ */

  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove("active");
        navMenu.classList.remove("mobile-nav");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
      }
    });
  });

});
