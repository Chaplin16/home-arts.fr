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
        slidesToShow: 3,
        arrows: false,
        speed:1300,
        adaptiveHeight: true,
        autoplaySpeed:1000,
        autoplay: true,
        cssEase: 'linear',
        waitForAnimate: false,
        pauseOnHover:false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    fade:false
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                    centerMode:true
                }
             }
         ]
    });
  }
  
carousel(".carousel", brands);

