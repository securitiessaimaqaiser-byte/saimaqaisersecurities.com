const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const body = document.body;

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

document.querySelectorAll(".dropdown > button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("open");
  });
});
