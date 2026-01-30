const stocks = [
  ["ENGRO", 265.43], ["FFC", 596.62], ["UBL", 487.00], ["LUCK", 463.00],
  ["MCB", 412.00], ["OGDC", 320.97], ["PPL", 271.80], ["HBL", 335.99],
  ["MEBL", 479.99], ["GLAXO", 424.99], ["ATLH", 1883.87], ["AGTL", 424.73],
  ["DAWN", 25.46], ["KEL", 7.27], ["PAEL", 56.24], ["PTC", 60.43]
];

const ticker = document.getElementById("ticker-track");

stocks.forEach(s => {
  const span = document.createElement("span");
  span.innerText = `${s[0]} ${s[1]} PKR`;
  ticker.appendChild(span);
});
