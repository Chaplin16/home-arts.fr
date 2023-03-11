const nav = document.querySelector("nav");

//rendre la navbar fixed au scroll
window.addEventListener("scroll", () => {
    if (window.scrollY < 350) {
      nav.classList.add("nav");
      
    } else {
      nav.classList.remove("nav");
    }
  });