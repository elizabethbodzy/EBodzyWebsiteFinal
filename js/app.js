$('.js-slideshow').css({
	'position': 'absolute',
	'top': '100px'
}).slick();

const $slideshow = $('.js-slideshow');

$slideshow.slick({
  infinite: true,
  arrows: false,
});

const $nextButton = $('.js-next');
const onNextButtonClick = () => {
	$slideshow.slick('slickNext');
}
$nextButton.click(onNextButtonClick)


