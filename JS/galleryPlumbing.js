const galleryPlumbing = document.getElementById("galleryPlumbing");

for (const element of plumbing) {
    galleryPlumbing.innerHTML +=`
    <li class="list-unstyled overflow-hidden" >
        <img data-kt-rotate="true" src=${element.link}  id="${element.id}" alt=${element.alt}/>
    </li>
    `
  }