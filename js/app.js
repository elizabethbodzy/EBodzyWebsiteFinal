// $('.js-slideshow').slick();
// .css({
// 	'position': 'absolute',
// 	'top': '100px'
// }).

// const $slideshowWideawake = $('.js-slideshow-wideawake');

// $slideshowWideawake.slick({
//   infinite: true,
//   arrows: false,

// });

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




// const sandboxId = ''
// const proId = ''

//     paypal.Button.render({

//         env: 'sandbox', // Or 'production for live'

//         client: {
//             sandbox:    sandboxId,
//             production: proId,
//         },

//         commit: true, // Show a 'Pay Now' button

//         payment: function(data, actions) {
//             return actions.payment.create({
//                 payment: {
//                     transactions: [
//                         {
//                             amount: { total: '1.00', currency: 'USD' }
//                         }
//                     ]
//                 }
//             });
//         },

//         onAuthorize: function(data, actions) {
//             return actions.payment.execute().then(function(payment) {

//                 // The payment is complete!
//                 // You can now show a confirmation message to the customer
//             });
//         }

//     }, '#paypal-button');

