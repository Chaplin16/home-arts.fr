const galleryElectricity = document.getElementById("gallery");

function slider(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(element) {
        element.innerHTML += 
        ` <li>
              <img src="${element.link}" alt="${element.alt}" id="${element.id}" />
          </li>`;
    }); 

  $(`.slider-for`).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
}
      

galleryElectricity(".slider", electricity)