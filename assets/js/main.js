/* Contact form validation (Lighthouse-friendly) */
const form = document.getElementById("contact-form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Please fill all required fields.");
    return;
  }

  alert("Message sent successfully (demo).");
});

/* Prevent layout shift on load */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
