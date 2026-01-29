const ticker = document.getElementById("ticker-content");

/*
  KSE-100 FRONTEND DATA SNAPSHOT
  --------------------------------
  This is a realistic structure that matches
  real PSX feeds and can be swapped with
  a paid API later without UI changes.
*/

const kse100 = [
  { symbol: "OGDC", price: 91.45, change: +1.12 },
  { symbol: "PPL", price: 87.20, change: -0.45 },
  { symbol: "ENGRO", price: 312.60, change: +0.88 },
  { symbol: "UBL", price: 158.10, change: +1.35 },
  { symbol: "MCB", price: 203.40, change: -0.22 },
  { symbol: "HBL", price: 102.55, change: +0.64 },
  { symbol: "LUCK", price: 612.00, change: +1.90 },
  { symbol: "PSO", price: 181.30, change: -0.78 },
  { symbol: "FFC", price: 108.75, change: +0.41 },
  { symbol: "EFERT", price: 68.95, change: +0.22 },
  // … extend to 100 (structure stays same)
];

/*
  BUILD TICKER STRING
*/
function buildTicker() {
  return kse100
    .map(stock => {
      const sign = stock.change >= 0 ? "+" : "";
      const color = stock.change >= 0 ? "up" : "down";

      return `
        <span class="stock ${color}">
          ${stock.symbol}
          <strong>${stock.price.toFixed(2)}</strong>
          (${sign}${stock.change.toFixed(2)}%)
        </span>
      `;
    })
    .join(" • ");
}

/*
  RENDER
*/
ticker.innerHTML = buildTicker();

/*
  CONTINUOUS SCROLL EFFECT
*/
let offset = 0;
function animateTicker() {
  offset -= 0.5;
  ticker.style.transform = `translateX(${offset}px)`;

  if (Math.abs(offset) > ticker.scrollWidth / 2) {
    offset = 0;
  }

  requestAnimationFrame(animateTicker);
}

animateTicker();
