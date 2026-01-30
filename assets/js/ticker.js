/**
 * PSX Ticker (Static – User Provided Rates)
 * Source: User-supplied PSX prices (temporary until API purchase)
 * Compatible with GitHub Pages
 */

document.addEventListener("DOMContentLoaded", () => {
  const tickerTrack = document.getElementById("ticker-track");

  if (!tickerTrack) return;

  const psxStocks = [
    { symbol: "ENGRO", company: "Engro Holdings", price: 265.43 },
    { symbol: "FFC", company: "Fauji Fertilizer Company", price: 596.62 },
    { symbol: "UBL", company: "United Bank Ltd", price: 487.00 },
    { symbol: "LUCK", company: "Lucky Cement", price: 463.00 },
    { symbol: "MCB", company: "MCB Bank Ltd", price: 412.00 },
    { symbol: "OGDC", company: "Oil & Gas Dev. Co.", price: 320.97 },
    { symbol: "PPL", company: "Pakistan Petroleum Ltd.", price: 271.80 },
    { symbol: "HBL", company: "Habib Bank Ltd.", price: 335.99 },
    { symbol: "MEBL", company: "Meezan Bank Ltd.", price: 479.99 },
    { symbol: "GLAXO", company: "GlaxoSmithKline Pakistan", price: 424.99 },
    { symbol: "ATLH", company: "Atlas Honda Ltd.", price: 1883.87 },
    { symbol: "AGTL", company: "Al-Ghazi Tractors", price: 424.73 },
    { symbol: "DAWN", company: "Dewan Motors", price: 25.46 },
    { symbol: "GNHI", company: "Ghandhara Industries", price: 912.06 },
    { symbol: "HINO", company: "Hinopak Motors", price: 440.16 },
    { symbol: "KEL", company: "K-Electric Ltd.", price: 7.27 },
    { symbol: "WAVESAPP", company: "Waves App Ltd.", price: 11.12 },
    { symbol: "SSGC", company: "Sui Southern Gas Co.", price: 35.66 },
    { symbol: "NCPL", company: "NCL Industries", price: 77.85 },
    { symbol: "AABS", company: "AABS Fabrics", price: 1014.70 },
    { symbol: "PAEL", company: "Pak Elektron Ltd.", price: 56.24 },
    { symbol: "KAPCO", company: "Kot Addu Power Co.", price: 34.58 },
    { symbol: "KML", company: "Kohinoor Mills Ltd.", price: 12.09 },
    { symbol: "PTC", company: "Pakistan Telecom Company", price: 60.43 },
    { symbol: "BOP", company: "Bank of Punjab", price: 39.53 }
  ];

  // Clear existing content
  tickerTrack.innerHTML = "";

  // Build ticker items
  psxStocks.forEach(stock => {
    const item = document.createElement("span");
    item.className = "ticker-item";
    item.innerHTML = `
      <strong>${stock.symbol}</strong>
      <em>${stock.company}</em>
      <b>PKR ${stock.price.toFixed(2)}</b>
    `;
    tickerTrack.appendChild(item);
  });

  // Duplicate for seamless infinite scroll
  tickerTrack.innerHTML += tickerTrack.innerHTML;
});
