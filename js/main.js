// Mobile menu 
$('.rcr-primary-nav').click(function () {
	$(this).children('ul').toggleClass('is-visible');
	$(this).toggleClass('open-mobile');
});

	
// Click outside of mobile menu 
jQuery(function($){
	$(document).mouseup(function (e){
		var div = $('.rcr-primary-nav');
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.rcr-primary-nav').children('ul').removeClass('is-visible');
			$('.rcr-primary-nav').removeClass('open-mobile');
		}
	});
});

// mobile menu animation
