const galleryElectricity = document.getElementById("gallery");

for (const element of electricity) {
    console.log(element);
    galleryElectricity.innerHTML +=`
    <li class="list-unstyled">
        <img src=${element.link}  id="${element.id}" alt=${element.alt}/>
    </li>
    `
  }
  