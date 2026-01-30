(function () {
  emailjs.init("ADD_PUBLIC_KEY_LATER");

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const btn = document.getElementById("submit-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (form.company.value !== "") return;

    btn.disabled = true;
    status.textContent = "Sending message…";

    emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", form)
      .then(() => {
        status.textContent = "Message sent successfully.";
        form.reset();
        setTimeout(() => status.textContent = "", 5000);
      })
      .catch(() => {
        status.textContent = "Error sending message.";
      })
      .finally(() => {
        btn.disabled = false;
      });
  });
})();
