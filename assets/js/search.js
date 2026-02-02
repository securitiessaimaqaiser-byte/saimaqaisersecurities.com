/* ==========================================================
   search.js
   Advanced Client-Side Search Engine
   ========================================================== */

(function () {
  "use strict";

  const SEARCH_DELAY = 200;

  let searchInput;
  let searchableItems;
  let debounceTimer;

  document.addEventListener("DOMContentLoaded", initSearch);

  function initSearch() {
    searchInput = document.querySelector("[data-search-input]");
    searchableItems = document.querySelectorAll("[data-search-item]");

    if (!searchInput || searchableItems.length === 0) return;

    bindEvents();
  }

  /* ------------------------------------------
     EVENT BINDINGS
  ------------------------------------------ */
  function bindEvents() {
    searchInput.addEventListener("input", handleSearch);
    searchInput.addEventListener("keydown", handleKeyControls);
  }

  /* ------------------------------------------
     SEARCH HANDLER (DEBOUNCED)
  ------------------------------------------ */
  function handleSearch(e) {
    const value = e.target.value.trim().toLowerCase();

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      filterItems(value);
    }, SEARCH_DELAY);
  }

  /* ------------------------------------------
     FILTER LOGIC
  ------------------------------------------ */
  function filterItems(query) {
    let visibleCount = 0;

    searchableItems.forEach(item => {
      const text =
        item.getAttribute("data-search-item").toLowerCase();

      if (!query || text.includes(query)) {
        item.style.display = "";
        item.setAttribute("aria-hidden", "false");
        visibleCount++;
      } else {
        item.style.display = "none";
        item.setAttribute("aria-hidden", "true");
      }
    });

    toggleNoResults(visibleCount);
  }

  /* ------------------------------------------
     NO RESULTS MESSAGE
  ------------------------------------------ */
  function toggleNoResults(count) {
    let message = document.querySelector(".search-no-results");

    if (!message) return;

    message.style.display = count === 0 ? "block" : "none";
  }

  /* ------------------------------------------
     KEYBOARD CONTROLS
  ------------------------------------------ */
  function handleKeyControls(e) {
    if (e.key === "Escape") {
      clearSearch();
    }
  }

  function clearSearch() {
    searchInput.value = "";
    filterItems("");
  }

})();
