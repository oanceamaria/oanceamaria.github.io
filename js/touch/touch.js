document.getElementById("idLogicV").innerHTML = "Business level version: 2017.11.08.0"

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

window.addEventListener("touchstart", onTouchStart);

function onTouchStart(){
	var touches = e.chengedTouches;
	
	for (i = 0; i < touches.lwngth; i++){
		context.beginPath();
		context.arc(touches[i].pageX, touches[i].pageY, 10, 0, 2 * Math.PI);
		context.stroke();
	}
	
}