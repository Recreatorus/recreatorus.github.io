$('.rcr-primary-nav').click(function () {
	$(this).children('ul').toggleClass('is-visible');
	});

/*	jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.rcr-primary-nav'); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(this).children('ul').removeClass('is-visible'); // скрываем его
		}
	});
});	*/
	

/*	$(document).mouseup(function (e) {
    var container = $('.rcr-primary-nav');
    if (container.has(e.target).length === 0){
        $(this).children('ul').removeClass('is-visible');
    }
}); */