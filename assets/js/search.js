/* =========================================================
   SEARCH.JS
   Internal Website Search
   Saima Qaiser Securities
   ========================================================= */

(function () {
  "use strict";

  const searchInput = document.getElementById("site-search");

  if (!searchInput) return;

  const searchableElements = document.querySelectorAll(
    "section, .card, .legal-content"
  );

  /* -----------------------------------------
     Utility: Normalize text
     ----------------------------------------- */
  function normalize(text) {
    return text.toLowerCase().replace(/\s+/g, " ").trim();
  }

  /* -----------------------------------------
     Search Handler
     ----------------------------------------- */
  searchInput.addEventListener("input", () => {
    const query = normalize(searchInput.value);

    searchableElements.forEach(el => {
      const content = normalize(el.textContent);

      if (query === "") {
        el.style.display = "";
        return;
      }

      el.style.display = content.includes(query) ? "" : "none";
    });
  });

  /* -----------------------------------------
     Clear on Escape
     ----------------------------------------- */
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchInput.value = "";
      searchableElements.forEach(el => (el.style.display = ""));
      searchInput.blur();
    }
  });

})();
