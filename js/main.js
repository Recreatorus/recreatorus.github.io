$('.rcr-primary-nav').click(function () {
	$(this).children('ul').toggleClass('is-visible');
	});

/*	jQuery(function($){
	$(document).mouseup(function (e){ // ������� ����� �� ���-���������
		var div = $('.rcr-primary-nav'); // ��� ��������� ID ��������
		if (!div.is(e.target) // ���� ���� ��� �� �� ������ �����
		    && div.has(e.target).length === 0) { // � �� �� ��� �������� ���������
			$(this).children('ul').removeClass('is-visible'); // �������� ���
		}
	});
});	*/
	

/*	$(document).mouseup(function (e) {
    var container = $('.rcr-primary-nav');
    if (container.has(e.target).length === 0){
        $(this).children('ul').removeClass('is-visible');
    }
}); */