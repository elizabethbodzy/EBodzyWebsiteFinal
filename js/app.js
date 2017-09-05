const $slideshow = $('.js-slideshow');
if ($slideshow.length > 0) {
	$slideshow.slick({
	  infinite: true,
	  arrows: false,

	});

	const $nextButton = $('.js-next');
	const onNextButtonClick = () => {
		$slideshow.slick('slickNext');
	}


	const $previousButton = $('.js-previous');
	const onPreviousButtonClick = () => {
		$slideshow.slick('slickPrev');
	}
	$nextButton.click(onNextButtonClick)
	$previousButton.click(onPreviousButtonClick)
}

