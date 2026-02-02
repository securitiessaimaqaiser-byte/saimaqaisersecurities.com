(() => {
  "use strict";

  /**
   * Basic client-side contact form handling
   * This script validates inputs and shows user feedback.
   * No data is sent to a backend in this implementation.
   */

  const form = document.getElementById("contactForm");

  if (!form) {
    return;
  }

  const showAlert = (message, type = "success") => {
    const alert = document.createElement("div");
    alert.className = `form-alert form-alert-${type}`;
    alert.textContent = message;

    form.prepend(alert);

    setTimeout(() => {
      alert.remove();
    }, 4000);
  };

  const validateForm = (data) => {
    if (!data.name || data.name.length < 2) {
      return "Please enter a valid name.";
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return "Please enter a valid email address.";
    }

    if (!data.message || data.message.length < 10) {
      return "Message must be at least 10 characters long.";
    }

    return null;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    const error = validateForm(formData);

    if (error) {
      showAlert(error, "error");
      return;
    }

    try {
      // Simulated successful submission
      showAlert(
        "Thank you for contacting us. We will get back to you shortly.",
        "success"
      );

      form.reset();
    } catch (err) {
      console.error("Contact form error:", err);
      showAlert(
        "Something went wrong. Please try again later.",
        "error"
      );
    }
  });
})();
