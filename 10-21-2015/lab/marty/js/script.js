$('li').on('click', function() {
	var textTitle = $(this).data('title');
	var textHref = $(this).data('href');


	var html = '<div class="popup">';
		html += '<h3>' + textTitle + '<h3>';
		html += '<a href=' + textHref + 'READ MORE' '</a>';
		html += '</div>';

		$('.popup').remove();
		$(this).append(html);

});

