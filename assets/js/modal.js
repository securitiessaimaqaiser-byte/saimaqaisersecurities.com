/* =====================================================
   MODAL CONTROLLER
   - Client Login Modal
   - Shareholder Agahi Popup (once per session)
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* =====================================
     CLIENT LOGIN MODAL
  ===================================== */
  const loginBtn = document.querySelector(".btn-secondary");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close");

  if (loginBtn && modalOverlay) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modalOverlay.classList.add("active");
    });
  }

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  }

  /* =====================================
     SHAREHOLDER AGAHI POPUP (ONCE/SESSION)
  ===================================== */
  const agahiPopup = document.getElementById("agahi-popup");
  const agahiClose = document.getElementById("agahi-close");

  // Only show once per session
  if (agahiPopup && !sessionStorage.getItem("agahiPopupShown")) {
    setTimeout(() => {
      agahiPopup.classList.add("active");
      sessionStorage.setItem("agahiPopupShown", "true");
    }, 800); // slight delay for professional feel
  }

  if (agahiClose) {
    agahiClose.addEventListener("click", () => {
      agahiPopup.classList.remove("active");
    });
  }

  if (agahiPopup) {
    agahiPopup.addEventListener("click", (e) => {
      if (e.target === agahiPopup) {
        agahiPopup.classList.remove("active");
      }
    });
  }

  /* =====================================
     EXTERNAL LINK HANDLERS
  ===================================== */
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-external-link]");
    if (!target) return;

    e.preventDefault();
    const url = target.getAttribute("data-external-link");
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  });
});
