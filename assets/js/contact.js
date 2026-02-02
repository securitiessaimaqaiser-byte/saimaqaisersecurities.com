/* =========================================================
   CONTACT.JS — CONTACT FORM HANDLER
   Project: Saima Qaiser Securities
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  if (!form) return;

  const status = document.getElementById("contactStatus");

  /* =====================================================
     ACCESSIBILITY
  ===================================================== */

  if (status) {
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
  }

  /* =====================================================
     VALIDATION HELPERS
  ===================================================== */

  function showStatus(message, success = false) {
    if (!status) return;
    status.textContent = message;
    status.className = success ? "contact-success" : "contact-error";
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* =====================================================
     FORM SUBMIT
  ===================================================== */

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("[name='name']").value.trim();
    const email = form.querySelector("[name='email']").value.trim();
    const message = form.querySelector("[name='message']").value.trim();

    if (!name || !email || !message) {
      showStatus("Please fill in all required fields.");
      return;
    }

    if (!isValidEmail(email)) {
      showStatus("Please enter a valid email address.");
      return;
    }

    /* =================================================
       BUILD EMAIL
    ================================================= */

    const subject = encodeURIComponent(
      "Website Contact — Saima Qaiser Securities"
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailtoLink =
      `mailto:abdulmmm556@gmail.com?subject=${subject}&body=${body}`;

    /* =================================================
       OPEN EMAIL CLIENT
    ================================================= */

    window.location.href = mailtoLink;

    showStatus(
      "Your message is ready to be sent. Please confirm in your email app.",
      true
    );

    form.reset();
  });

});
