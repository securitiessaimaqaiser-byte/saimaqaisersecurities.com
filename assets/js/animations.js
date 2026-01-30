/**
 * Scroll Reveal Engine
 * Tuned to video timing
 */

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.18
  }
);

// Standard reveal elements
document.querySelectorAll(".reveal").forEach(el => {
  revealObserver.observe(el);
});

// Card stagger handling
document.querySelectorAll(".cards .card").forEach(card => {
  revealObserver.observe(card);
});
