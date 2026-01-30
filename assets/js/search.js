/* =========================================================
   SITE SEARCH (CLIENT-SIDE)
   Project: Saima Qaiser Securities
   ========================================================= */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.querySelector("#site-search-input");
    const searchResults = document.querySelector("#site-search-results");

    if (!searchInput || !searchResults) return;

    /**
     * Collect searchable elements
     * Uses data-searchable attribute OR text blocks
     */
    const searchableElements = Array.from(
      document.querySelectorAll(
        "[data-searchable], main p, main li, main h1, main h2, main h3"
      )
    );

    /**
     * Clear previous results
     */
    function clearResults() {
      searchResults.innerHTML = "";
      searchResults.classList.remove("active");
    }

    /**
     * Highlight matched text
     */
    function highlightText(text, query) {
      const regex = new RegExp(`(${query})`, "gi");
      return text.replace(regex, "<mark>$1</mark>");
    }

    /**
     * Perform search
     */
    function performSearch(query) {
      clearResults();

      if (!query || query.length < 2) return;

      const fragment = document.createDocumentFragment();
      let matchCount = 0;

      searchableElements.forEach(el => {
        const text = el.textContent.trim();
        if (!text) return;

        if (text.toLowerCase().includes(query.toLowerCase())) {
          matchCount++;

          const resultItem = document.createElement("div");
          resultItem.className = "search-result-item";
          resultItem.setAttribute("tabindex", "0");

          const preview = text.substring(0, 160) + "...";

          resultItem.innerHTML = `
            <strong>${el.tagName}</strong>
            <p>${highlightText(preview, query)}</p>
          `;

          resultItem.addEventListener("click", () => {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            clearResults();
          });

          fragment.appendChild(resultItem);
        }
      });

      if (matchCount === 0) {
        const empty = document.createElement("div");
        empty.className = "search-no-results";
        empty.textContent = "No results found.";
        fragment.appendChild(empty);
      }

      searchResults.appendChild(fragment);
      searchResults.classList.add("active");
    }

    /**
     * Input listener (debounced)
     */
    let debounceTimer;
    searchInput.addEventListener("input", e => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        performSearch(e.target.value.trim());
      }, 200);
    });

    /**
     * Close search on ESC
     */
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        clearResults();
        searchInput.blur();
      }
    });

    /**
     * Click outside closes results
     */
    document.addEventListener("click", e => {
      if (
        !searchResults.contains(e.target) &&
        e.target !== searchInput
      ) {
        clearResults();
      }
    });

  });

})();
