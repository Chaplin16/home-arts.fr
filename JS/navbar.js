const nav = document.getElementById("nav");
const hamburgerIcon = document.querySelector(".navbar-toggler");

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
