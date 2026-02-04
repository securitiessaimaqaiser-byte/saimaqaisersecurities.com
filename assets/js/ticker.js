/* ==========================================================
   ticker.js
   Advanced Market Ticker Engine (Production)
   ========================================================== */

(function () {
  "use strict";

  const TICKER_SPEED_DESKTOP = 0.6;
  const TICKER_SPEED_MOBILE = 0.35;

  let tickerContainer;
  let tickerTrack;
  let isPaused = false;
  let position = 0;
  let speed = TICKER_SPEED_DESKTOP;

  document.addEventListener("DOMContentLoaded", initTicker);

  function initTicker() {
    tickerContainer = document.querySelector(".market-ticker");
    tickerTrack = document.querySelector(".market-ticker-track");

    if (!tickerContainer || !tickerTrack) return;

    setSpeed();
    duplicateContent();
    bindEvents();
    startTicker();
  }

  /* ------------------------------------------
     SPEED HANDLING
  ------------------------------------------ */
  function setSpeed() {
    speed = window.innerWidth < 768
      ? TICKER_SPEED_MOBILE
      : TICKER_SPEED_DESKTOP;

    window.addEventListener("resize", () => {
      speed = window.innerWidth < 768
        ? TICKER_SPEED_MOBILE
        : TICKER_SPEED_DESKTOP;
    });
  }

  /* ------------------------------------------
     DUPLICATE CONTENT FOR INFINITE LOOP
  ------------------------------------------ */
  function duplicateContent() {
    const clone = tickerTrack.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    tickerContainer.appendChild(clone);
  }

  /* ------------------------------------------
     EVENTS
  ------------------------------------------ */
  function bindEvents() {
    tickerContainer.addEventListener("mouseenter", pause);
    tickerContainer.addEventListener("mouseleave", resume);
    tickerContainer.addEventListener("focusin", pause);
    tickerContainer.addEventListener("focusout", resume);

    document.addEventListener("visibilitychange", () => {
      document.hidden ? pause() : resume();
    });
  }

  function pause() {
    isPaused = true;
  }

  function resume() {
    isPaused = false;
  }

  /* ------------------------------------------
     MAIN ANIMATION LOOP
  ------------------------------------------ */
  function startTicker() {
    function animate() {
      if (!isPaused) {
        position -= speed;

        const width = tickerTrack.offsetWidth;
        if (Math.abs(position) >= width) {
          position = 0;
        }

        tickerContainer.style.transform =
          `translate3d(${position}px, 0, 0)`;
      }

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

})();
