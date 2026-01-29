const psxStocks = [
  ["ENGRO",265.43],["FFC",596.62],["UBL",487.00],
  ["LUCK",463.00],["MCB",412.00],["OGDC",320.97],
  ["PPL",271.80],["HBL",335.99],["MEBL",479.99],
  ["PAEL",56.24],["KEL",7.27],["BOP",39.53]
];

const tickerTrack = document.getElementById("ticker-track");

const tickerHTML = psxStocks.map(
  s => `<span>${s[0]} <strong>PKR ${s[1]}</strong></span>`
).join("");

/* duplicate for seamless loop */
tickerTrack.innerHTML = tickerHTML + tickerHTML;
