const toggleButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (toggleButton && mainNav) {
  toggleButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  }
});

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}
