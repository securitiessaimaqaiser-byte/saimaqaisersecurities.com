/* =========================================================
   PSX STOCK TICKER (STATIC DATA)
   Project: Saima Qaiser Securities
   ========================================================= */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {

    const tickerTrack = document.querySelector(".ticker-track");
    if (!tickerTrack) return;

    /* ===============================
       STATIC PSX DATA (USER PROVIDED)
       =============================== */

    const psxStocks = [
      { symbol: "ENGRO", price: 265.43, change: +1.25 },
      { symbol: "FFC", price: 596.62, change: -2.10 },
      { symbol: "UBL", price: 487.00, change: +0.85 },
      { symbol: "LUCK", price: 463.00, change: -1.40 },
      { symbol: "MCB", price: 412.00, change: +0.60 },
      { symbol: "OGDC", price: 320.97, change: -0.75 },
      { symbol: "PPL", price: 271.80, change: +1.05 },
      { symbol: "HBL", price: 335.99, change: -0.45 },
      { symbol: "MEBL", price: 479.99, change: +1.90 },
      { symbol: "GLAXO", price: 424.99, change: -0.30 },
      { symbol: "ATLH", price: 1883.87, change: +12.4 },
      { symbol: "AGTL", price: 424.73, change: -3.15 },
      { symbol: "DAWN", price: 25.46, change: +0.12 },
      { symbol: "GNHI", price: 912.06, change: +6.75 },
      { symbol: "HINO", price: 440.16, change: -2.40 },
      { symbol: "KEL", price: 7.27, change: +0.05 },
      { symbol: "WAVESAPP", price: 11.12, change: -0.08 },
      { symbol: "SSGC", price: 35.66, change: +0.32 },
      { symbol: "NCPL", price: 77.85, change: -0.55 },
      { symbol: "AABS", price: 1014.70, change: +9.20 },
      { symbol: "PAEL", price: 56.24, change: +0.44 },
      { symbol: "KAPCO", price: 34.58, change: -0.28 },
      { symbol: "KML", price: 12.09, change: +0.06 },
      { symbol: "PTC", price: 60.43, change: +0.70 },
      { symbol: "BOP", price: 39.53, change: -0.33 }
    ];

    /* ===============================
       RENDER TICKER ITEMS
       =============================== */

    function renderTicker() {
      tickerTrack.innerHTML = "";

      psxStocks.forEach(stock => {
        const item = document.createElement("div");
        item.className = "ticker-item";
        item.setAttribute(
          "aria-label",
          `${stock.symbol} price ${stock.price} PKR`
        );

        const isUp = stock.change >= 0;
        const arrow = isUp ? "▲" : "▼";
        const changeClass = isUp ? "up" : "down";

        item.innerHTML = `
          <span class="symbol">${stock.symbol}</span>
          <span class="price">PKR ${stock.price.toFixed(2)}</span>
          <span class="change ${changeClass}" 
                title="Change: ${stock.change}">
            ${arrow} ${Math.abs(stock.change).toFixed(2)}
          </span>
        `;

        tickerTrack.appendChild(item);
      });

      // Duplicate items for seamless scroll
      tickerTrack.innerHTML += tickerTrack.innerHTML;
    }

    renderTicker();

    /* ===============================
       PAUSE ON HOVER
       =============================== */

    tickerTrack.addEventListener("mouseenter", () => {
      tickerTrack.style.animationPlayState = "paused";
    });

    tickerTrack.addEventListener("mouseleave", () => {
      tickerTrack.style.animationPlayState = "running";
    });

  });

})();
