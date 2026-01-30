/* =====================================================
   PSX TICKER — STATIC DATA (API-READY)
   Replace this array later with real PSX API response
   ===================================================== */

const psxStocks = [
  ["ENGRO", 265.43],
  ["FFC", 596.62],
  ["UBL", 487.00],
  ["LUCK", 463.00],
  ["MCB", 412.00],
  ["OGDC", 320.97],
  ["PPL", 271.80],
  ["HBL", 335.99],
  ["MEBL", 479.99],
  ["GLAXO", 424.99],
  ["ATLH", 1883.87],
  ["AGTL", 424.73],
  ["DAWN", 25.46],
  ["GNHI", 912.06],
  ["HINO", 440.16],
  ["KEL", 7.27],
  ["WAVESAPP", 11.12],
  ["SSGC", 35.66],
  ["NCPL", 77.85],
  ["AABS", 1014.70],
  ["PAEL", 56.24],
  ["KAPCO", 34.58],
  ["KML", 12.09],
  ["PTC", 60.43],
  ["BOP", 39.53]
];

/* =====================================================
   RENDER TICKER
   ===================================================== */

const tickerTrack = document.getElementById("ticker-track");

function renderTicker(data) {
  const html = data.map(
    ([symbol, price]) =>
      `<span>
        <strong>${symbol}</strong>
        <span class="price">PKR ${price.toLocaleString()}</span>
      </span>`
  ).join("");

  /* duplicate content for seamless loop */
  tickerTrack.innerHTML = html + html;
}

/* =====================================================
   INIT
   ===================================================== */

renderTicker(psxStocks);

/* =====================================================
   FUTURE REAL PSX API (DROP-IN READY)
   ===================================================== */

/*
fetch("REAL_PSX_API_ENDPOINT")
  .then(res => res.json())
  .then(apiData => {
    const liveData = apiData.map(item => [
      item.symbol,
      item.lastPrice
    ]);
    renderTicker(liveData);
  });
*/
