/* =========================================================
   TICKER.JS — FINAL PRODUCTION VERSION
   Project: Saima Qaiser Securities
   Notes:
   - Static data (NO PSX API)
   - Fully accessible
   - Infinite smooth loop
   - Pause on hover / focus
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const ticker = document.querySelector(".ticker");
  const track = document.getElementById("tickerTrack");

  if (!ticker || !track) return;

  /* =====================================================
     LOCKED STOCK DATA (DO NOT CHANGE)
  ===================================================== */

  const stocks = [
    { symbol: "KSE-100", price: "78,214.34", change: "+0.42%" },
    { symbol: "OGDC",    price: "128.45",    change: "-0.31%" },
    { symbol: "LUCK",    price: "624.10",    change: "+1.12%" },
    { symbol: "ENGRO",   price: "287.90",    change: "+0.08%" },
    { symbol: "HBL",     price: "95.66",     change: "-0.54%" },
    { symbol: "UBL",     price: "134.80",    change: "+0.27%" },
    { symbol: "PSO",     price: "181.22",    change: "-0.19%" }
  ];

  /* =====================================================
     CREATE TICKER ITEM
  ===================================================== */

  function createItem(stock) {
    const isUp = stock.change.startsWith("+");

    const item = document.createElement("div");
    item.className = `ticker-item ${isUp ? "up" : "down"}`;
    item.setAttribute("role", "listitem");
    item.setAttribute(
      "aria-label",
      `${stock.symbol}, price ${stock.price}, change ${stock.change}`
    );
    item.title = `${stock.symbol} — Price: ${stock.price} | Change: ${stock.change}`;

    item.innerHTML = `
      <span class="ticker-symbol">${stock.symbol}</span>
      <span class="ticker-price">${stock.price}</span>
      <span class="ticker-change">
        ${isUp ? "▲" : "▼"} ${stock.change}
      </span>
    `;

    return item;
  }

  /* =====================================================
     POPULATE TRACK (DOUBLE FOR INFINITE LOOP)
  ===================================================== */

  function buildTicker() {
    track.innerHTML = "";
    const fragment = document.createDocumentFragment();

    stocks.forEach(stock => fragment.appendChild(createItem(stock)));
    stocks.forEach(stock => fragment.appendChild(createItem(stock)));

    track.appendChild(fragment);
  }

  buildTicker();

  /* =====================================================
     PAUSE / RESUME HELPERS
  ===================================================== */

  const pause = () => {
    track.style.animationPlayState = "paused";
  };

  const resume = () => {
    track.style.animationPlayState = "running";
  };

  /* =====================================================
     INTERACTION CONTROLS
  ===================================================== */

  // Mouse
  ticker.addEventListener("mouseenter", pause);
  ticker.addEventListener("mouseleave", resume);

  // Keyboard accessibility
  ticker.addEventListener("focusin", pause);
  ticker.addEventListener("focusout", resume);

  // Touch devices (tap pauses briefly)
  let touchTimeout;
  ticker.addEventListener("touchstart", () => {
    pause();
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(resume, 3000);
  });

  /* =====================================================
     REDUCED MOTION SUPPORT (WCAG)
  ===================================================== */

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    track.style.animation = "none";
  }

});
