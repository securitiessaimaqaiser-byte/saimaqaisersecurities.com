/* ==========================================================
   contact.js
   Secure Client-Side Contact Form Handler
   ========================================================== */

(function () {
  "use strict";

  const FORM_SELECTOR = "#contactForm";
  const EMAIL_TO = "abdulmmm556@gmail.com";

  document.addEventListener("DOMContentLoaded", initContactForm);

  function initContactForm() {
    const form = document.querySelector(FORM_SELECTOR);
    if (!form) return;

    form.addEventListener("submit", handleSubmit);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const status = form.querySelector(".form-status");

    const name = form.querySelector("[name='name']")?.value.trim();
    const email = form.querySelector("[name='email']")?.value.trim();
    const message = form.querySelector("[name='message']")?.value.trim();
    const honeypot = form.querySelector("[name='company']")?.value; // spam trap

    if (honeypot) return; // bot detected

    if (!name || !email || !message) {
      updateStatus(status, "Please fill in all required fields.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      updateStatus(status, "Please enter a valid email address.", "error");
      return;
    }

    updateStatus(status, "Sending message...", "loading");

    sendEmail({ name, email, message })
      .then(() => {
        updateStatus(
          status,
          "Thank you! Your message has been sent successfully.",
          "success"
        );
        form.reset();
      })
      .catch(() => {
        fallbackMailto(name, email, message);
        updateStatus(
          status,
          "Your email app has been opened to send the message.",
          "success"
        );
        form.reset();
      });
  }

  /* ------------------------------------------
     EMAIL DELIVERY (MAILTO FALLBACK SAFE)
  ------------------------------------------ */
  function sendEmail({ name, email, message }) {
    return new Promise((resolve, reject) => {
      try {
        const mailtoLink = `
          mailto:${EMAIL_TO}
          ?subject=Website Contact from ${encodeURIComponent(name)}
          &body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
          )}
        `.replace(/\s+/g, "");

        window.location.href = mailtoLink;
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  /* ------------------------------------------
     FALLBACK
  ------------------------------------------ */
  function fallbackMailto(name, email, message) {
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.open(
      `mailto:${EMAIL_TO}?subject=Website Contact&body=${body}`,
      "_blank"
    );
  }

  /* ------------------------------------------
     HELPERS
  ------------------------------------------ */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function updateStatus(element, message, type) {
    if (!element) return;

    element.textContent = message;
    element.className = `form-status ${type}`;
    element.setAttribute("aria-live", "polite");
  }

})();
