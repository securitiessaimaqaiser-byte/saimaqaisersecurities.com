/**
 * CONTACT FORM HANDLER
 * Uses EmailJS (keys added later)
 * No redirect, no backend server
 */

(function () {
  emailjs.init("YOUR_PUBLIC_KEY_HERE"); // ADD LATER

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.textContent = "Sending message...";
    status.setAttribute("aria-live", "polite");

    emailjs.sendForm(
      "YOUR_SERVICE_ID_HERE",
      "YOUR_TEMPLATE_ID_HERE",
      this
    ).then(
      () => {
        status.textContent = "Message sent successfully.";
        form.reset();
      },
      () => {
        status.textContent = "Error sending message. Please try again.";
      }
    );
  });
})();
