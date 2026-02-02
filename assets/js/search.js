(() => {
  "use strict";

  /**
   * Simple client-side search functionality
   * Filters visible elements based on user input.
   */

  const searchInput = document.getElementById("siteSearch");

  if (!searchInput) {
    return;
  }

  const searchableElements = document.querySelectorAll(
    "[data-searchable]"
  );

  const normalizeText = (text) =>
    text.toLowerCase().replace(/\s+/g, " ").trim();

  const performSearch = (query) => {
    const normalizedQuery = normalizeText(query);

    searchableElements.forEach((el) => {
      const text = normalizeText(el.textContent);

      if (text.includes(normalizedQuery)) {
        el.style.display = "";
      } else {
        el.style.display = "none";
      }
    });
  };

  searchInput.addEventListener("input", (event) => {
    performSearch(event.target.value);
  });
})();
