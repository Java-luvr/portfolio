const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const navbar = document.querySelector(".navbar");

const toggleBtn = document.getElementById("theme-toggle");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;

    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`,
    );
  });

  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
