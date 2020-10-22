
$(function () {
	// Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(550).fadeOut('slow');

	//  Menu opener hamburger
	$('.hamburger').click(function () {
		$('.menu-collapse').toggleClass('d-none').addClass('order');
		$('.menu').toggleClass('menu-opened');
	});

	// Menu closed
	$('.menu-opened li a').click(function () {
		$('.menu-collapse').toggleClass('d-none').addClass('order');
		$('.menu').toggleClass('menu-opened');
	});

	// Modal window
	$('.nav-btn, .footer-btn, .aplication__btn').click(function(e){
		e.preventDefault();
		$('#lab-consulting-modal').arcticmodal();
	});

	// Slider
	if($('.responses').length) {
	    $('.responses').slick({
			dots:true,
			prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
			nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
		});
	};

	// Parallax home header
	if($('.home-header').length) {
		$('.home-header').parallax({imageSrc: './img/Home/header.jpg'});
	}

	// Parallax mission header
	if($('.mission').length) {
		$('.mission').parallax({imageSrc: './img/Home/mission.png'});
	}
	
	// Parallax maintenance services
	if($('.maintenance').length) {
		$('.maintenance').parallax({imageSrc: './img/services/services-bg.jpg'});
	}
	
	// Smooth scrolling
	$('a.go').click(function() {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: destination}, 1000);
	
	});
});