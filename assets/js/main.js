const marketText = document.getElementById("market-text");
const statusDot = document.querySelector(".status-dot");

function checkMarketStatus() {
  const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" });
  const d = new Date(now);
  const day = d.getDay();
  const hour = d.getHours();

  const open = day >= 1 && day <= 5 && hour >= 9 && hour < 15;

  marketText.textContent = open ? "PSX Market Open" : "PSX Market Closed";
  statusDot.classList.toggle("open", open);
}

checkMarketStatus();
