
var imageNames = ['fall.jpg', 'desert.jpg', 'grass.jpg', 'winter.jpg'];
var imageIndex = 0;

// $('.image-wrapper img').attr('src', 'images/' + imageNames[0]);


$('.change-image').on('click', changeImage);

// function changeImage() {
// 	console.log('changeImage');
	// $('.image-wrapper img').attr('src', 'images/' + imageNames[1]);
// }

function changeImage() {
	$('.image-wrapper img').attr('src', 'images/' + imageNames[imageIndex]);
	imageIndex ++;
	if(imageIndex == 4) {
		imageIndex = 0;
	}
	console.log(imageIndex);
}

changeImage();