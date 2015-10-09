/* 

- Recieve input data from input field
- Figure out formula:  T(°F) = T(°C) × 1.8 + 32
- Write a function that does: 
		takes Temp in Celcius 
		Multiplies by 1.8 and adds 32

- Create variable for our new data and place it on the page
- Use the temperature variable
- Use conditionals if/else to change background color of page
Fahrenheit

*/

$('button').on('click', americanize);

function americanize(event) {
	event.preventDefault();
	var tempCelcius = $('input').val();
	//saves input into a variable
	console.log(tempCelcius);
	// run convertTemp fucntion
	convertTemp(tempCelcius);

}

function convertTemp(num) {
	var newTemp = num * 1.8 + 32;
	console.log(newTemp);
	updateHtmlTemp(newTemp);

}

function updateHtmlTemp(num) {
	$('.tempFahrenheit').html(num);
	$('input').val('');
}



// //for example:
// function updateHtmlTemp(name) {
// 	$('.tempFahrenheit').html(name);
// }

// updateHtmlTemp('Matt')