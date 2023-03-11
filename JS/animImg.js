const jump = document.querySelector(".jump");

//animate in scroll of 800px for img in  the text in index.html
window.addEventListener("scroll", () => {
    if (window.scrollY < 1000) {
      jump.classList.add("jumpImg");  
    } else {
      jump.classList.remove("jumpImg");
    }
  });