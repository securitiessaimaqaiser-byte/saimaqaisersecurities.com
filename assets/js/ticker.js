/* ==========================================================
   STOCK TICKER – STATIC DATA (UPGRADED)
   File: assets/js/ticker.js
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const tickerTrack = document.querySelector(".ticker-track");
  if (!tickerTrack) return;

  const stocks = [
    { s: "KEL", p: 7.10, c: -0.02 },
    { s: "BOP", p: 38.88, c: -0.65 },
    { s: "PTC", p: 61.98, c: 1.55 },
    { s: "PIBTL", p: 20.63, c: 0.33 },
    { s: "LOTCHEM", p: 30.51, c: -0.40 },
    { s: "CNERGY", p: 7.60, c: -0.04 },
    { s: "FFL", p: 20.92, c: -0.16 },
    { s: "FCCL", p: 57.05, c: 0.89 },
    { s: "PPL", p: 277.34, c: 5.19 },
    { s: "FFC", p: 588.57, c: -8.53 },
    { s: "SSGC", p: 34.05, c: -0.38 },
    { s: "NML", p: 200.19, c: 11.80 },
    { s: "OGDC", p: 323.93, c: 2.12 },
    { s: "JVDC", p: 160.17, c: 12.45 },
    { s: "NBP", p: 268.43, c: 1.22 },
    { s: "HUBC", p: 230.46, c: 1.98 },
    { s: "PAEL", p: 56.19, c: -0.05 },
    { s: "AKBL", p: 116.49, c: -1.20 },
    { s: "MLCF", p: 115.19, c: 1.67 },
    { s: "TRG", p: 72.17, c: 1.04 },
    { s: "HUMNL", p: 12.36, c: -0.07 },
    { s: "ENGROH", p: 261.86, c: 7.76 },
    { s: "SEARL", p: 120.17, c: 1.37 },
    { s: "PSO", p: 471.15, c: 3.46 },
    { s: "ILP", p: 83.32, c: 5.14 },

    { s: "KAPCO", p: 34.95, c: 0.37 },
    { s: "DGKC", p: 224.07, c: 1.72 },
    { s: "SYS", p: 154.57, c: 0.49 },
    { s: "LUCK", p: 482.13, c: 16.70 },
    { s: "MARI", p: 710.07, c: 17.92 },
    { s: "EFERT", p: 244.31, c: 5.20 },
    { s: "SNGP", p: 115.75, c: 1.65 },
    { s: "ATRL", p: 863.56, c: 16.71 },
    { s: "UNITY", p: 19.71, c: -0.08 },
    { s: "YOUW", p: 5.23, c: -0.07 },
    { s: "MEBL", p: 488.67, c: 11.51 },
    { s: "AIRLINK", p: 183.46, c: 2.08 },
    { s: "BAFL", p: 127.34, c: 1.61 },
    { s: "PSX", p: 49.92, c: -0.59 },
    { s: "HBL", p: 343.90, c: 7.01 },

    { s: "MCB", p: 407.28, c: -5.33 },
    { s: "SAZEW", p: 2146.48, c: 37.11 },
    { s: "GLAXO", p: 419.79, c: 0.17 },
    { s: "MTL", p: 552.66, c: 2.06 },
    { s: "AGP", p: 210.71, c: 1.88 },
    { s: "PKGS", p: 837.83, c: 11.20 },
    { s: "APL", p: 606.30, c: 6.98 },
    { s: "BWCL", p: 516.90, c: -1.77 },

    { s: "ABL", p: 199.87, c: 0.51 },
    { s: "INDU", p: 2168.47, c: 84.20 },
    { s: "PAKT", p: 1650.06, c: 36.92 },
    { s: "NESTLE", p: 7883.79, c: 25.93 },
    { s: "UPFL", p: 27719.00, c: 373.17 }
  ];

  function createTickerItem(stock) {
    const item = document.createElement("div");
    item.className = "ticker-item";

    const changeClass = stock.c >= 0 ? "up" : "down";
    const sign = stock.c >= 0 ? "+" : "";

    item.innerHTML = `
      <span class="symbol">${stock.s}</span>
      <span class="price">${stock.p.toFixed(2)}</span>
      <span class="change ${changeClass}">
        ${sign}${stock.c.toFixed(2)}
      </span>
    `;
    return item;
  }

  function populateTicker() {
    tickerTrack.innerHTML = "";
    stocks.forEach(stock => {
      tickerTrack.appendChild(createTickerItem(stock));
    });
    stocks.forEach(stock => {
      tickerTrack.appendChild(createTickerItem(stock));
    });
  }

  populateTicker();
});
