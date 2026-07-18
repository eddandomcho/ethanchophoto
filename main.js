const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

const navbar = document.querySelector("nav");

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  prevScrollPos = currentScrollPos;
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".intro", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".me", {
  ...scrollRevealOption,
});

// ScrollReveal().reveal(".portfolio__grid", {
//   ...scrollRevealOption,
// });

const preview = document.getElementById("headshotdex__preview");

document.querySelectorAll(".tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    preview.src = tile.dataset.image;
    preview.alt = tile.querySelector("img").alt;
  });
});

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("zoomed");
  });
});
