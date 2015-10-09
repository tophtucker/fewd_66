// $('a').on('click', function(event) {
// 	event.preventDefault()
// 	var targetName = $(event.currentTarget).attr('href');
// 	var offset = $(event.currentTarget).offset();
// 	console.log(offset);
	
// });


// $('a.scroll-to-link').on('click', scrollToLink);
// ​
// function scrollToLink(event) {
// 	event.preventDefault();
// 	var targetName = $(event.currentTarget).attr('href');
// 	var offset = $(event.currentTarget).offset();
// ​
// 	console.log(offset);
// }

$('a.scroll-to-link').on('click', scrollToLink);

function scrollToLink(event) {
	event.preventDefault();
	var targetName = $(event.currentTarget).attr('href');
	var offset = $('#two').offset();

	console.log(offset);

	$('html, body').animate({
		scrollTop:offset.top
	}, 1000, function() {}
});

}
