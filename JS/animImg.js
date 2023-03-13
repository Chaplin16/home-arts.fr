const jump = document.querySelector(".jump");
const turn = document.querySelector(".turn");
const navAnimation = document.getElementById("nav-animation")

// animate logo in navbar
window.addEventListener("scroll", () => {
  if (window.scrollY >= 450) {
    navAnimation.classList.add("nav-animation");
  } else {
    navAnimation.classList.remove("nav-animation");
  }
});

//animate in scroll of 1000px for img in  the text in index.html AND for logo in footer
window.addEventListener("scroll", () => {
    if (window.scrollY >= 450) {
      jump.classList.add("jumpImg");  
      turn.classList.add("turn");  
    } else {
      jump.classList.remove("jumpImg");
      turn.classList.remove("turn");
    }
  });


  //animate in scroll of 1300px for logo in footer
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 1700 ) {
      turn.classList.add("turn");  
    } else {
      turn.classList.remove("turn");
    }
  });