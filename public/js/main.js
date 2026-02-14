// ===============================
// DOM Ready
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    initFlashMessages();
    initMobileNav();
    initSmoothScroll();
});

// ===============================
// Flash Message Auto Dismiss
// ===============================

function initFlashMessages() {
    const flashMessages = document.querySelectorAll(".flash-message");

    flashMessages.forEach(message => {
        setTimeout(() => {
            message.style.opacity = "0";
            message.style.transition = "opacity 0.5s ease";

            setTimeout(() => {
                message.remove();
            }, 500);
        }, 4000);
    });
}

// ===============================
// Mobile Navbar Toggle
// ===============================

function initMobileNav() {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
}

// ===============================
// Smooth Scroll for Anchor Links
// ===============================

function initSmoothScroll() {
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (targetId.length > 1) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });
}

// ===============================
// Future Ready Functions
// ===============================

// Example: Confirm before dangerous actions
function confirmAction(message = "Are you sure?") {
    return confirm(message);
}
