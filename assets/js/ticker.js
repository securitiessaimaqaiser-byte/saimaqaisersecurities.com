const ticker = document.getElementById("ticker-content");

const stocks = [
  "KSE100 +1.2%",
  "OGDC +0.8%",
  "ENGRO -0.4%",
  "UBL +0.9%"
];

let i = 0;
setInterval(() => {
  ticker.textContent = stocks[i % stocks.length];
  i++;
}, 2000);

