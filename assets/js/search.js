/* =========================================================
   SEARCH.JS — SITE SEARCH (CLIENT-SIDE)
   Project: Saima Qaiser Securities
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("siteSearch");
  const searchableItems = document.querySelectorAll("[data-search]");

  if (!searchInput || searchableItems.length === 0) return;

  /* =====================================================
     ACCESSIBILITY ATTRIBUTES
  ===================================================== */

  searchInput.setAttribute("role", "searchbox");
  searchInput.setAttribute("aria-label", "Search site content");

  /* =====================================================
     SEARCH HANDLER
  ===================================================== */

  function normalize(text) {
    return text.toLowerCase().trim();
  }

  function clearHighlights() {
    searchableItems.forEach(el => {
      el.classList.remove("search-hidden", "search-match");
    });
  }

  function performSearch(query) {
    const q = normalize(query);

    if (!q) {
      clearHighlights();
      return;
    }

    searchableItems.forEach(el => {
      const text = normalize(el.textContent);

      if (text.includes(q)) {
        el.classList.add("search-match");
        el.classList.remove("search-hidden");
      } else {
        el.classList.add("search-hidden");
        el.classList.remove("search-match");
      }
    });
  }

  /* =====================================================
     INPUT EVENTS
  ===================================================== */

  searchInput.addEventListener("input", e => {
    performSearch(e.target.value);
  });

  searchInput.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      searchInput.value = "";
      clearHighlights();
      searchInput.blur();
    }
  });

});
