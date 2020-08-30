

var uppArrow = document.getElementById("uppArrow");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   uppArrow.style.display = "block";
  } else {
    uppArrow.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


new WOW().init();

$(document).ready(function() {

    let owlLoggo = $('#LoggoSlide');
    owlLoggo.owlCarousel({
        items: 4,
        loop: true,
        margin: 100,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false,
            loop: true
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        }
    }
    })

    var owlPhotos = $('#PhoneSlide');
    owlPhotos.owlCarousel({
        items: 5,
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        center: true,
        dots: false,
        responsiveClass: true,
        
        responsive:{
            0:{
                items:3,
                nav:false,
                margin: 10,
                
            },
            600:{
                items:3,
                nav:false,
                margin: 30,
            },
            768:{
                items:3,
                nav:false,
                margin: 20,
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            }
        }

        
   
        
    });

  

 

   
     
})