// ===============================
// PSX SAMPLE DATA (MANUAL FOR NOW)
// ===============================

const psxData = [
  { symbol: "ENGRO", price: 265.43 },
  { symbol: "FFC", price: 596.62 },
  { symbol: "UBL", price: 487.00 },
  { symbol: "LUCK", price: 463.00 },
  { symbol: "MCB", price: 412.00 },
  { symbol: "OGDC", price: 320.97 },
  { symbol: "PPL", price: 271.80 },
  { symbol: "HBL", price: 335.99 },
  { symbol: "MEBL", price: 479.99 },
  { symbol: "GLAXO", price: 424.99 },
  { symbol: "ATLH", price: 1883.87 },
  { symbol: "AGTL", price: 424.73 },
  { symbol: "DAWN", price: 25.46 },
  { symbol: "GNHI", price: 912.06 },
  { symbol: "HINO", price: 440.16 },
  { symbol: "KEL", price: 7.27 },
  { symbol: "WAVESAPP", price: 11.12 },
  { symbol: "SSGC", price: 35.66 },
  { symbol: "NCPL", price: 77.85 },
  { symbol: "AABS", price: 1014.70 },
  { symbol: "PAEL", price: 56.24 },
  { symbol: "KAPCO", price: 34.58 },
  { symbol: "KML", price: 12.09 },
  { symbol: "PTC", price: 60.43 },
  { symbol: "BOP", price: 39.53 }
];

// ===============================
// BUILD TICKER
// ===============================

const tickerTrack = document.getElementById("ticker-track");

function buildTicker() {
  tickerTrack.innerHTML = "";

  psxData.forEach(stock => {
    const item = document.createElement("div");
    item.className = "ticker-item";
    item.innerHTML = `
      <strong>${stock.symbol}</strong>
      <span>PKR ${stock.price.toFixed(2)}</span>
    `;
    tickerTrack.appendChild(item);
  });

  // Duplicate for infinite scroll
  tickerTrack.innerHTML += tickerTrack.innerHTML;
}

// ===============================
// INIT
// ===============================

document.addEventListener("DOMContentLoaded", buildTicker);
