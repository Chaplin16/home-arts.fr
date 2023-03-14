const jump = document.querySelector(".jump");
turn = document.querySelector(".turn");

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


 