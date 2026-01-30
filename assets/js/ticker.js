/**
 * PSX Ticker (Static Prices – User Provided)
 * Features:
 * - Green / Red arrows
 * - Hover tooltips
 * - Pause on hover
 * - Infinite scroll
 */

document.addEventListener("DOMContentLoaded", () => {
  const tickerTrack = document.getElementById("ticker-track");
  const tickerWrapper = document.querySelector(".ticker");

  if (!tickerTrack || !tickerWrapper) return;

  const psxStocks = [
    { symbol: "ENGRO", company: "Engro Holdings", price: 265.43, change: 1.24 },
    { symbol: "FFC", company: "Fauji Fertilizer Company", price: 596.62, change: -2.15 },
    { symbol: "UBL", company: "United Bank Ltd", price: 487.00, change: 0.87 },
    { symbol: "LUCK", company: "Lucky Cement", price: 463.00, change: -1.32 },
    { symbol: "MCB", company: "MCB Bank Ltd", price: 412.00, change: 0.44 },
    { symbol: "OGDC", company: "Oil & Gas Dev. Co.", price: 320.97, change: -0.66 },
    { symbol: "PPL", company: "Pakistan Petroleum Ltd.", price: 271.80, change: 1.09 },
    { symbol: "HBL", company: "Habib Bank Ltd.", price: 335.99, change: -0.91 },
    { symbol: "MEBL", company: "Meezan Bank Ltd.", price: 479.99, change: 1.78 },
    { symbol: "GLAXO", company: "GlaxoSmithKline Pakistan", price: 424.99, change: -0.54 },
    { symbol: "ATLH", company: "Atlas Honda Ltd.", price: 1883.87, change: 12.45 },
    { symbol: "AGTL", company: "Al-Ghazi Tractors", price: 424.73, change: -3.12 },
    { symbol: "PAEL", company: "Pak Elektron Ltd.", price: 56.24, change: 0.31 },
    { symbol: "KEL", company: "K-Electric Ltd.", price: 7.27, change: -0.08 },
    { symbol: "PTC", company: "Pakistan Telecom Company", price: 60.43, change: 0.21 }
  ];

  tickerTrack.innerHTML = "";

  psxStocks.forEach(stock => {
    const isUp = stock.change >= 0;
    const arrow = isUp ? "▲" : "▼";
    const changeClass = isUp ? "up" : "down";

    const item = document.createElement("span");
    item.className = `ticker-item ${changeClass}`;
    item.setAttribute(
      "title",
      `${stock.company} | Static PSX price (API coming soon)`
    );

    item.innerHTML = `
      <strong>${stock.symbol}</strong>
      <b>PKR ${stock.price.toFixed(2)}</b>
      <i>${arrow} ${Math.abs(stock.change).toFixed(2)}</i>
    `;

    tickerTrack.appendChild(item);
  });

  // Duplicate for infinite scroll
  tickerTrack.innerHTML += tickerTrack.innerHTML;

  // Pause on hover
  tickerWrapper.addEventListener("mouseenter", () => {
    tickerTrack.style.animationPlayState = "paused";
  });

  tickerWrapper.addEventListener("mouseleave", () => {
    tickerTrack.style.animationPlayState = "running";
  });
});
