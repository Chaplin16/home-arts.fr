const galleryElectricity = document.getElementById("gallery");

for (const element of electricity) {
    console.log(element);
    galleryElectricity.innerHTML +=
    `<li>
        <img src=${element.link} alt=${element.alt} id=${element.id} />
    </li>`
  }
  