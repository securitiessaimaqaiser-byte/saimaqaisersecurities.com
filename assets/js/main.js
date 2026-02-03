/**
 * main.js
 * Core site scripts + PSX ticker engine
 * Data source: Static snapshot from latest uploaded PSX PDF (CURRENT column only)
 */

document.addEventListener("DOMContentLoaded", () => {
  updateYear();
  initClientLoginModal();
  initTicker();
});

/* =========================
   FOOTER YEAR
========================= */
function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* =========================
   CLIENT LOGIN MODAL
========================= */
function initClientLoginModal() {
  const loginBtn = document.querySelector(".btn-secondary");
  const modalOverlay = document.querySelector(".modal-overlay");
  const closeBtn = document.querySelector(".modal-close");

  if (!loginBtn || !modalOverlay || !closeBtn) return;

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modalOverlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });
}

/* =========================
   PSX TICKER ENGINE
========================= */
function initTicker() {
  const tickerEl = document.querySelector(".ticker span");
  if (!tickerEl) return;

  /**
   * Static snapshot from NEW PSX PDF
   * Columns used:
   * - symbol
   * - current (CURRENT column)
   * - change (numeric)
   */
  const tickerData = [
    { symbol: "KEL", current: 7.34, change: 0.23 },
    { symbol: "FNEL", current: 1.71, change: 0.06 },
    { symbol: "BOP", current: 40.28, change: 1.78 },
    { symbol: "HASCOLNC", current: 25.53, change: -0.39 },
    { symbol: "TRG", current: 75.59, change: 2.77 },
    { symbol: "OGDC", current: 104.22, change: -1.14 },
    { symbol: "PPL", current: 86.90, change: 0.67 },
    { symbol: "UBL", current: 189.50, change: 2.10 },
    { symbol: "MCB", current: 214.75, change: -1.25 },
    { symbol: "ENGRO", current: 297.40, change: 3.60 }
  ];

  const tickerText = tickerData
    .map((item) => {
      const arrow = item.change >= 0 ? "▲" : "▼";
      const cls = item.change >= 0 ? "ticker-up" : "ticker-down";
      const changeVal = Math.abs(item.change).toFixed(2);

      return `
        <span class="ticker-item ${cls}">
          ${item.symbol} ${item.current.toFixed(2)}
          ${arrow} ${changeVal}
        </span>
      `;
    })
    .join(" | ");

  // Duplicate content for seamless loop
  tickerEl.innerHTML = tickerText + " | " + tickerText;
}
