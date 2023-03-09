//carousel de photos
function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(e) {
        element.innerHTML += 
        `<div class="card-img">
            <img class="m-auto" src="${e.link}" alt="${e.alt}">
        </div>`;
    });
    $(element).slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        arrows: false,
        speed:1300,
        adaptiveHeight: true,
        autoplaySpeed:1200,
        autoplay: true,
        pauseOnHover:true,
        responsive: [
            {
                breakpoint: 1550,
                settings: {

                    slidesToShow: 3,
                }
           },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
             }
         ]
    });
  }
  
carousel(".carousel", brands);

