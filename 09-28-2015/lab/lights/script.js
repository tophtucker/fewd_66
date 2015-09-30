// var lightSwitch = 'off';
// var lightSwitch = 'on';


$('#lightSwitch').on('click', updateLight);

function updateLight(){
	console.log('updateLight');
	$('body').toggleClass('dark');
}

function houseLights(){

	
}

// function updateLight(){
// 	if(lightSwitch == 'on') {
// 		$('body').css('background-color',"black");
// 		lightSwitch = 'off';
// 	} else {
// 		$('body').css('background-color',"white");
// 		lightSwitch = 'on';
// 	}
// }



