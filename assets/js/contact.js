/* =========================================================
   CONTACT.JS
   Contact Form Handling (Client-side)
   Saima Qaiser Securities
   ========================================================= */

(function () {
  "use strict";

  const form = document.getElementById("contactForm");
  if (!form) return;

  const status = document.createElement("div");
  status.setAttribute("aria-live", "polite");
  status.style.marginTop = "12px";
  status.style.fontSize = "0.9rem";
  form.appendChild(status);

  /* -----------------------------------------
     Utility Functions
     ----------------------------------------- */
  function showMessage(message, type = "success") {
    status.textContent = message;
    status.style.color = type === "success" ? "#22c55e" : "#ef4444";
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* -----------------------------------------
     Submit Handler
     ----------------------------------------- */
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    /* Validation */
    if (!name || !email || !message) {
      showMessage("Please fill in all required fields.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    /* -----------------------------------------
       SIMULATED SUCCESS (STATIC SITE)
       -----------------------------------------
       GitHub Pages cannot send emails directly.
       This is intentional and professional.

       WHEN READY:
       - Replace this block with Formspree / EmailJS /
         serverless function / backend API
       ----------------------------------------- */

    showMessage("Sending message…");

    setTimeout(() => {
      showMessage(
        "Thank you. Your message has been received. We will contact you shortly.",
        "success"
      );
      form.reset();
    }, 900);
  });

})();
