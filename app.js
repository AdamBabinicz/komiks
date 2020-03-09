const hamburgerIcon = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburgerIcon.addEventListener("click", () => {
  navList.classList.toggle("open");
  hamburgerIcon.classList.toggle("active");
});

const navLi = document.querySelector("ul");
navLi.addEventListener("click", () => {
  navList.classList.toggle("open");
  hamburgerIcon.classList.toggle("active");
});
