// Mobile menu 
$('.rcr-primary-nav').click(function () {
	$(this).children('ul').toggleClass('is-visible');
	$(this).toggleClass('open-mobile');
});
// Mobile menu animation 
$(".rcr-primary-nav a").each(function( index ) {
  	$( this ).css({'animation-delay': (index/10)+'s'});
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


jQuery(function($){
	$.fn.fadeInDelay = function(){
    	var init = function(){
        	$(this).hide().delay($(this).data('delay')).fadeIn();
        };
    	return this.each(init);
    };
}(jQuery));

$('.present_item').fadeInDelay();

