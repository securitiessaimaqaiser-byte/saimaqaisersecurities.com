document.getElementById("site-search").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll("section").forEach(sec => {
    sec.style.display = sec.textContent.toLowerCase().includes(q) ? "" : "none";
  });
});
