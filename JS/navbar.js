const nav = document.getElementById("nav");
const hamburgerIcon = document.querySelector(".navbar-toggler");
const navAnimation = document.getElementById("nav-animation")

//rendre la navbar fixed au scroll

document.addEventListener('scroll',() => {
		let top  = document.documentElement.scrollTop;
    if (window.scrollY > 450) {
    	nav.classList.add("display");
    } else {
    	nav.classList.remove("display");
    }
});

  //mavbar qui se deplie au click
hamburgerIcon.addEventListener("click", toggleNav);
function toggleNav() {
  hamburgerIcon.classList.toggle("active");
}


// animate logo in navbar
window.addEventListener("scroll", () => {
  if (window.scrollY >= 450) {
    navAnimation.classList.add("nav-animation");
  } else {
    navAnimation.classList.remove("nav-animation");
  }
});