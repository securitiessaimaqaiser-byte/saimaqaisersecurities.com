/**
 * Client Login Modal Controller
 * ------------------------------------
 * - Opens on "Client Login" click
 * - Closes on overlay click
 * - Closes on ❌ button
 * - Closes on ESC key
 * - Safe for multiple pages
 */

(function () {
  function openModal() {
    const overlay = document.querySelector(".modal-overlay");
    if (!overlay) return;

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const overlay = document.querySelector(".modal-overlay");
    if (!overlay) return;

    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Open modal when Client Login button is clicked
  document.addEventListener("click", function (e) {
    const loginBtn = e.target.closest(".btn-secondary");
    if (loginBtn && loginBtn.textContent.trim() === "Client Login") {
      e.preventDefault();
      openModal();
    }
  });

  // Close modal when clicking overlay
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  });

  // Close modal on ❌ button
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-close")) {
      closeModal();
    }
  });

  // Close modal on ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
})();
