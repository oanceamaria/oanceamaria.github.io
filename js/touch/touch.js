document.getElementById("idLogicV").innerHTML = "Business level version: 2017.11.08.2"

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.addEventListener("touchstart", onTouchStart);

function onTouchStart(event){
	var touches = event.changedTouches;
	
	for (i = 0; i < touches.length; i++){
		context.beginPath();
		context.arc(touches[i].pageX, touches[i].pageY, 10, 0, 2 * Math.PI);
		context.stroke();
	}
	
}