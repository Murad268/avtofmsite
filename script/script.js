


$('.slider').slick({
	infinite: true,
	slidesToShow: 2,
	centerMode: false,
	slidesToScroll: 1,
	dots: true,
	prevArrow:
		'<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left"></i></button>',
	nextArrow:
		'<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right"></i></button>',
	responsive: [
		{
			breakpoint: 788,
			settings: {
				slidesToShow: 1,
				arrows: false,
		
			},
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				arrows: false,
			},
		},
		{
			breakpoint: 1280,
			settings: {
				arrows: false,
			},
		},
	],
})

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
				arrows: false,
			},
		},
		{
			breakpoint: 675,
			settings: {
				slidesToShow: 1,
				arrows: false,
			},
		},
	],
})

$('.read__news__slider').slick({
	infinite: true,
	slidesToShow: 2,
	centerMode: false,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	prevArrow:
		'<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left"></i></button>',
	nextArrow:
		'<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right"></i></button>',
	responsive: [
		{
			breakpoint: 360,
			settings: {
				slidesToShow: 1,
				arrows: false,
			},
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 2,
				arrows: false,
			},
		},
		{
			breakpoint: 690,
			settings: {
				slidesToShow: 3,
				arrows: false,
			},
		},
		{
			breakpoint: 1050,
			settings: {
				slidesToShow: 4,
				arrows: false,
			},
		},
		{
			breakpoint: 1290,
			settings: {
				arrows: false,
			},
		},
	],
})


function mainslider(className) {
  $(className).slick({
    infinite: true,
    slidesToShow: 4,
    centerMode: false,
    slidesToScroll: 4,
    dots: true,
    prevArrow:
      '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 788,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
    ],
  })
}

mainslider('.podcasts__slider');
mainslider('.show__cats__wrapper');
mainslider(".discover__wrapper");
mainslider(".popularvideos__wrapper");

function secondSlider(className) {
  $(className).slick({
    infinite: true,
    slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 3,
    dots: true,
    prevArrow:
      '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 788,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
        },
      },
    ],
  })
}
secondSlider(".meet__slider")
secondSlider(".our__djs__carusel")







function openMenu(trigger, menu, close, classAc) {
	const btn = document.querySelector(trigger),
		hiddMenu = document.querySelector(menu),
		closeBtn = document.querySelector(close)

	btn.addEventListener('click', () => {
		hiddMenu.classList.add(classAc)
	})
	closeBtn.addEventListener('click', () => {
		hiddMenu.classList.remove(classAc)
	})
}

openMenu(
	'.navbar__hamburger',
	'.mini__hidden__menu',
	'.menu__close',
	'mini__hidden__menu__active'
)
