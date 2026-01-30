/* =========================================================
   TICKER.JS
   Pakistan Stock Exchange Ticker (Static Data)
   Saima Qaiser Securities
   ========================================================= */

(function () {
  "use strict";

  const tickerTrack = document.querySelector(".ticker-track");
  if (!tickerTrack) return;

  /* ======================================================
     STATIC PSX DATA (USER PROVIDED)
     ====================================================== */

  const stocks = [
    { symbol: "ENGRO", name: "Engro Holdings", price: 265.43, change: 1 },
    { symbol: "FFC", name: "Fauji Fertilizer Company", price: 596.62, change: 1 },
    { symbol: "UBL", name: "United Bank Limited", price: 487.0, change: -1 },
    { symbol: "LUCK", name: "Lucky Cement", price: 463.0, change: 1 },
    { symbol: "MCB", name: "MCB Bank Ltd.", price: 412.0, change: -1 },
    { symbol: "OGDC", name: "Oil & Gas Development Co.", price: 320.97, change: -1 },
    { symbol: "PPL", name: "Pakistan Petroleum Ltd.", price: 271.8, change: 1 },
    { symbol: "HBL", name: "Habib Bank Ltd.", price: 335.99, change: -1 },
    { symbol: "MEBL", name: "Meezan Bank Ltd.", price: 479.99, change: 1 },
    { symbol: "GLAXO", name: "GlaxoSmithKline Pakistan", price: 424.99, change: 1 },
    { symbol: "ATLH", name: "Atlas Honda Ltd.", price: 1883.87, change: 1 },
    { symbol: "AGTL", name: "Al-Ghazi Tractors", price: 424.73, change: -1 },
    { symbol: "DAWN", name: "Dewan Motors", price: 25.46, change: -1 },
    { symbol: "GNHI", name: "Ghandhara Industries", price: 912.06, change: 1 },
    { symbol: "HINO", name: "Hinopak Motors", price: 440.16, change: 1 },
    { symbol: "KEL", name: "K-Electric Ltd.", price: 7.27, change: -1 },
    { symbol: "WAVESAPP", name: "Waves App Ltd.", price: 11.12, change: 1 },
    { symbol: "SSGC", name: "Sui Southern Gas Co.", price: 35.66, change: -1 },
    { symbol: "NCPL", name: "NCL Industries", price: 77.85, change: 1 },
    { symbol: "AABS", name: "AABS Fabrics", price: 1014.7, change: 1 },
    { symbol: "PAEL", name: "Pak Elektron Ltd.", price: 56.24, change: 1 },
    { symbol: "KAPCO", name: "Kot Addu Power Co.", price: 34.58, change: -1 },
    { symbol: "KML", name: "Kohinoor Mills Ltd.", price: 12.09, change: -1 },
    { symbol: "PTC", name: "Pakistan Telecom Company", price: 60.43, change: 1 },
    { symbol: "BOP", name: "Bank of Punjab", price: 39.53, change: 1 }
  ];

  /* ======================================================
     BUILD TICKER ITEMS
     ====================================================== */

  function createTickerItem(stock) {
    const item = document.createElement("div");
    item.className = "ticker-item tooltip";
    item.setAttribute("data-tooltip", stock.name);

    const symbol = document.createElement("span");
    symbol.className = "symbol";
    symbol.textContent = stock.symbol;

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = stock.price.toFixed(2);

    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.textContent = stock.change > 0 ? "▲" : "▼";
    arrow.classList.add(stock.change > 0 ? "price-up" : "price-down");

    item.appendChild(symbol);
    item.appendChild(price);
    item.appendChild(arrow);

    return item;
  }

  /* ======================================================
     RENDER & DUPLICATE (SEAMLESS LOOP)
     ====================================================== */

  function renderTicker() {
    tickerTrack.innerHTML = "";

    stocks.forEach(stock => {
      tickerTrack.appendChild(createTickerItem(stock));
    });

    // Duplicate for seamless scroll
    stocks.forEach(stock => {
      tickerTrack.appendChild(createTickerItem(stock));
    });
  }

  renderTicker();

  /* ======================================================
     PAUSE ON HOVER (LIKE PSX)
     ====================================================== */

  tickerTrack.addEventListener("mouseenter", () => {
    tickerTrack.style.animationPlayState = "paused";
  });

  tickerTrack.addEventListener("mouseleave", () => {
    tickerTrack.style.animationPlayState = "running";
  });

  /* ======================================================
     FUTURE: REAL PSX API INTEGRATION
     ======================================================
     Replace the `stocks` array with API response
     and re-call renderTicker().
     NO OTHER CHANGES REQUIRED.
     ====================================================== */

})();
