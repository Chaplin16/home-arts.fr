const nav = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".navbar-toggler");

//rendre la navbar fixed au scroll
window.addEventListener("scroll", () => {
    if (window.scrollY < 350) {
      nav.classList.add("nav");
      
    } else {
      nav.classList.remove("nav");
    }
  });

  //mavbar qui se deplie au click
hamburgerIcon.addEventListener("click", toggleNav);
function toggleNav() {
  hamburgerIcon.classList.toggle("active");
}
