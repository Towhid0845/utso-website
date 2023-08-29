$(function ($) {
	// product slider js
	$(".product-slider").slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<i class="fas left icon fa-chevron-left icon left"></i>',
		nextArrow: '<i class="fas right icon fa-chevron-right icon right"></i>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	});

	// supplier slider js
	$(".client-slider").slick({
		dots: false,
		infinite: true,
		autoplaySpeed: 0,
		speed: 5000,
		arrows: false,
		slidesToShow: 8,
		autoplay: true,
		slidesToScroll: 1,
		cssEase: "linear",
		responsive: [{
			breakpoint: 992,
			settings: {
			  slidesToShow: 6,
			}
		  },
		  {
			breakpoint: 576,
			settings: {
			  slidesToShow: 6,
			}
		  }
		]
	  });


	// mobile menu js
	$('.mobile-topbar .bars i').click(function () {
		$('.mobile-menu-main').addClass('show-mobile-menu')
	  })
	  $('.close-m-menu').click(function () {
		$('.mobile-menu-main').removeClass('show-mobile-menu')
	  })
	  $('.mobile-topbar .bars i').click(function () {
		$('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
	  })
	  $('.mobile-topbar .bars i').click(function () {
		$('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
	  })
	  $('.close-m-menu').click(function () {
		$('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
	  })
	  $('.mobile-menu-overlay').click(function () {
		$('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
	  })
	  $('.mobile-menu-overlay').click(function () {
		$('.mobile-menu-main').removeClass('show-mobile-menu')
	  })
	
	  $('.sub-menu ul').hide();
	  $(".sub-menu a").click(function () {
		$(this).parent(".sub-menu").children("ul").slideToggle("100");
		$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
	  });

});

AOS.init({
	duration: 1200,
});