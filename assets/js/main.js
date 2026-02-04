(() => {
  "use strict";

  /**
   * Set current year in footer
   */
  const setCurrentYear = () => {
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  };

  /**
   * Smooth scroll for internal anchor links
   */
  const enableSmoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (targetId.length > 1) {
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

  /**
   * Initialize animations on page load
   */
  const initAnimations = () => {
    const animatedElements = document.querySelectorAll(
      ".fade-in, .slide-up, .scale-in"
    );

    animatedElements.forEach((el) => {
      el.style.opacity = "1";
    });
  };

  /**
   * DOM Ready
   */
  document.addEventListener("DOMContentLoaded", () => {
    setCurrentYear();
    enableSmoothScroll();
    initAnimations();
  });
})();
