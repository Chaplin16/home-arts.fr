const galleryElectricity = document.getElementById("gallery");

for (const element of electricity) {
    galleryElectricity.innerHTML +=`
    <li class="list-unstyled">
        <img class="${element.position}" data-kt-rotate="true" src=${element.link}  id="${element.id}" alt=${element.alt}/>
    </li>
    `
  }
  