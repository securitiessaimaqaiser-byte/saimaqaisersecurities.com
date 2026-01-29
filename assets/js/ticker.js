const stocks = [
  ["ENGRO",265.43],["FFC",596.62],["UBL",487.00],
  ["LUCK",463.00],["MCB",412.00],["OGDC",320.97],
  ["PPL",271.80],["HBL",335.99],["MEBL",479.99]
];

const track = document.getElementById("ticker-track");
track.innerHTML = stocks.map(s =>
  `<span style="margin:0 30px">${s[0]}: PKR ${s[1]}</span>`
).join("") +
stocks.map(s =>
  `<span style="margin:0 30px">${s[0]}: PKR ${s[1]}</span>`
).join("");
