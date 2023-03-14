 //animate in scroll of 1300px for logo in footer

 const turn = document.querySelector(".turn");
 
 window.addEventListener("scroll", () => {
    if (window.scrollY >= 1700 ) {
      turn.classList.add("turn");  
    } else {
      turn.classList.remove("turn");
    }
  });