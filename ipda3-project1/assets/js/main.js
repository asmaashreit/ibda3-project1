$(document).ready(function(){
    $(".services-card").owlCarousel({
        loop:true,
        dots:false,
        rtl:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                margin:20
            },
            600:{
                items:2,
                nav:true,
                margin:30
            },
            1000:{
                items:3,
                nav:true,
                margin:25
            }
            
        }
    });
  });


$(document).ready(function(){
    $(".customer-cards").owlCarousel({
        loop:true,
        dots:false,
        rtl:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true,
                margin:20
            },
            600:{
                items:3,
                nav:true,
                margin:30
            },
            1000:{
                items:4,
                nav:true,
                margin:50
            }
            
        }
    });
  });


  