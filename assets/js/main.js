const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

burger.onclick = () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
};

document.querySelectorAll('.dropdown > button').forEach(btn=>{
  btn.onclick = () => btn.parentElement.classList.toggle('open');
});
