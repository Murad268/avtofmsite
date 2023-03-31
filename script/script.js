const audio = new Audio('../assets/music/Assassin\'s Creed Chronicles Russia Main Theme.mp3');
const playButton = document.querySelector('.navbar__body__controlls__play');
const stopButton = document.querySelector('.navbar__body__controlls__stop');
const delaySlider = document.querySelector('.navbar__body__controlls__delay');
const delayBar = document.querySelector('.navbar__body__controlls__delay__blue');

const playOrStop = (music) => ({
  play: () => music.play(),
  stop: () => music.pause()
});

const duration = (music, bar) => {
  music.addEventListener('timeupdate', () => {
    const percentage = (music.currentTime / music.duration) * 100;
    bar.style.width = `${percentage}%`;
  });
};

const delayControl = (music, slider, bar) => {
  const { left: sliderLeft, width: sliderWidth } = slider.getBoundingClientRect();

  slider.addEventListener('click', ({ clientX }) => {
    const x = clientX - sliderLeft;
    const percentage = (x / sliderWidth) * 100;
    const currentTime = (music.duration / 100) * percentage;

    music.currentTime = currentTime;
    bar.style.width = `${percentage}%`;
  });
};

const controls = {
  play: playOrStop(audio).play,
  stop: playOrStop(audio).stop,
  duration: () => duration(audio, delayBar),
  delay: () => delayControl(audio, delaySlider, delayBar)
};

playButton.addEventListener('click', controls.play);
stopButton.addEventListener('click', controls.stop);
controls.duration();
controls.delay();



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
