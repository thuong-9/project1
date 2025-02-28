window.addEventListener('DOMContentLoaded',function(e){
    const navToggle = document.querySelector(".nav-toggle");
    navToggle.onclick = function(e){
        document.body.classList.add('show-menu');
    }

    const navClose = document.querySelector(".nav-close");
    navClose.onclick = function(e){
        document.body.classList.remove('show-menu');
    }
});
//

$(document).ready(function () {
    $('#slickslider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplayspeed: 3000,
      prevArrow: $('#prev'),
      nextArrow: $('#next'),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    });
  });
//
window.addEventListener('DOMContentLoaded',function(e){
  const ulink= document.querySelector(".up-link a");
  ulink.onclick=function (e) {
    e.preventDefault();
      if(document.body.classList.contains('show-all')) {
        document.body.classList.remove('show-all');
        ulink.textContent="See all upcoming events ";
      }
      else{
        document.body.classList.add('show-all');
        ulink.textContent="show less";
      }  
  };
});

