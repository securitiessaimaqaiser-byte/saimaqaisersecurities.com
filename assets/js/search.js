document.getElementById("site-search").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  document.body.innerHTML.includes(q);
});

