/* =========================================================
   CONTACT FORM HANDLER
   Project: Saima Qaiser Securities
   ========================================================= */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");
    const status = document.getElementById("contact-status");

    if (!form || !status) return;

    /**
     * Basic email regex (WCAG-safe)
     */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /**
     * Show status message
     */
    function showStatus(message, isError = false) {
      status.textContent = message;
      status.className = isError ? "error" : "success";
      status.setAttribute("role", "alert");
    }

    /**
     * Handle submit
     */
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      status.textContent = "";

      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();

      // Validation
      if (!name || !email || !message) {
        showStatus("Please fill in all required fields.", true);
        return;
      }

      if (!emailPattern.test(email)) {
        showStatus("Please enter a valid email address.", true);
        return;
      }

      /**
       * Submit via FormSubmit (AJAX, no redirect)
       * Emails go directly to: abdulmmm556@gmail.com
       */
      const formData = new FormData(form);
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      fetch("https://formsubmit.co/ajax/abdulmmm556@gmail.com", {
        method: "POST",
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          if (data.success === "true") {
            showStatus("Thank you! Your message has been sent successfully.");
            form.reset();
          } else {
            showStatus("Something went wrong. Please try again.", true);
          }
        })
        .catch(() => {
          showStatus("Network error. Please try again later.", true);
        });

    });

  });

})();
