document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  if (!name.value || !email.value) {
    alert("Please fill all fields");
    return;
  }
  alert("Message sent (demo)");
});
