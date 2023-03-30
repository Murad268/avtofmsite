
$('.slider').slick({
   infinite: true,
   slidesToShow: 2,
   
   centerMode: false,
   slidesToScroll: 1,
   dots: true,
   
   prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left"></i></button>',
   nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right"></i></button>',
   responsive: [
      {
        breakpoint: 788,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 1280,
        settings: {
          arrows: false
        }
      }
    ]
 });

 $('.meet__slider').slick({
  infinite: true,
  slidesToShow: 3,
  centerMode: false,
  slidesToScroll: 3,
  dots: true,
  prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right"></i></button>',
  responsive: [
     {
       breakpoint: 788,
       settings: {
         slidesToShow: 1,
         arrows: false
       }
     },
     {
       breakpoint: 1200,
       settings: {
         slidesToShow: 2,
         arrows: false
       }
     },
     {
      breakpoint: 1280,
      settings: {
        arrows: false
      }
    }
   ]
});


$('.podcasts__slider').slick({
  infinite: true,
  slidesToShow: 4,
  centerMode: false,
  slidesToScroll: 4,
  dots: true,
  prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right"></i></button>',
  responsive: [
    {

      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 1,
        arrows: false
      }
    },
     {
       breakpoint: 788,
       settings: {
         dots: false,
         slidesToShow: 2,
         arrows: false
       }
     },
     {
       breakpoint: 1200,
       settings: {
         dots: false,
         slidesToShow: 3,
         arrows: false
       }
     },
     {
      breakpoint: 1290,
      settings: {
        dots: false,
        slidesToShow: 3,
        arrows: false
      }
    }
   ]
});

$('.popular__slider__wrapper').slick({
  infinite: true,
  slidesToShow: 4,
  centerMode: false,
  slidesToScroll: 4,
  dots: true,
  prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right"></i></button>',
  responsive: [
    {

      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 1,
        arrows: false
      }
    },
     {
       breakpoint: 788,
       settings: {
         dots: false,
         slidesToShow: 2,
         arrows: false
       }
     },
     {
       breakpoint: 1200,
       settings: {
         dots: false,
         slidesToShow: 3,
         arrows: false
       }
     },
     {
      breakpoint: 1290,
      settings: {
        dots: false,
        slidesToShow: 3,
        arrows: false
      }
    }
   ]
});

$('.show__cats__wrapper').slick({
  infinite: true,
  slidesToShow: 4,
  centerMode: false,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
     
        slidesToShow: 1,
      
      }
    },
    {
      breakpoint: 786,
      settings: {
     
        slidesToShow: 2,
      
      }
    },
    {
      breakpoint: 992,
      settings: {
     
        slidesToShow: 3,
      
      }
    }
   ]
});








$('.menu__mini').slick({
  infinite: true,
  slidesToShow: 4,
  centerMode: false,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  
  responsive: [
    {
      breakpoint: 952,
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    },
    {
      breakpoint: 675,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
   ]
});


$('.our__djs__carusel').slick({
  infinite: true,
  slidesToShow: 3,
  centerMode: false,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right"></i></button>',
  
  responsive: [
    {
      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 1,
        arrows: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    },
    {
      breakpoint: 1280,
      settings: {
        
        arrows: false
      }
    }
   ]
});



$('.discover__wrapper').slick({
  infinite: true,
  slidesToShow: 4,
  centerMode: false,
  slidesToScroll: 3,
  dots: true,
  prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        arrows: false
      }
    },
    {
      breakpoint: 1280,
      settings: {

        arrows: false
      }
    },
   ]
});



$('.read__news__slider').slick({
  infinite: true,
  slidesToShow: 2,
  centerMode: false,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    },
    {
      breakpoint: 690,
      settings: {
        slidesToShow: 3,
        arrows: false
      }
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 4,
        arrows: false
      }
    },
    {
      breakpoint: 1290,
      settings: {
       
        arrows: false
      }
    },
  ]
});




$('.popularvideos__wrapper').slick({
  infinite: true,
  slidesToShow: 4,
  centerMode: false,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    },
 
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 1290,
      settings: {
       
        arrows: false
      }
    },
  ]
});