document.getElementById("idLogicV").innerHTML = "Business level version: 2017.11.08.3"

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.addEventListener("touchstart", onTouchStart);

function genRendColor(){
	var litere = "0123456789ABCDEF"
	var color = "#";
	for (i = 0; i < 6; i++){
		color += litere[Math.floor(Math.random() * 16)];
	}
	return color;
}

function onTouchStart(event){
	var touches = event.changedTouches;
	var rect = canvas.getBoundingClientRect();
	
	for (i = 0; i < touches.length; i++)
		context.beginPath();
		context.arc(touches[i].pageX - rect.left, touches[i].pageY - rect.top, 10, 0, 2 * Math.PI);
		context.strokeStyle = genRendColor();
		context.stroke();
		
	}
	