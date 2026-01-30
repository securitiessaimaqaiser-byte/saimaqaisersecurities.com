document.getElementById("site-search").addEventListener("keyup", function () {
  const q = this.value.toLowerCase();
  document.querySelectorAll("section").forEach(sec => {
    sec.style.display = sec.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
});
