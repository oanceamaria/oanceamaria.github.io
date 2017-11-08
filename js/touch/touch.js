document.getElementById("idLogicV").innerHTML = "Business level version: 2017.11.08.7"

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var rect = canvas.getBoundingClientRect();

canvas.addEventListener("touchstart", onTouchStart);
canvas.addEventListener("touchmove", onTouchMove);

var touch = [];

function genRendColor(){
	var litere = "0123456789ABCDEF"
	var color = "#";
	for (var i = 0; i < 6; i++){
		color += litere[Math.floor(Math.random() * 16)];
	}
	return color;
}

function onTouchStart(e){
	var touches = e.changedTouches;
	
	for (var i = 0; i < touches.length; i++){
		touch.push({id:touches[i].identifier, color:genRendColor()});
		context.beginPath();
		context.arc(touches[i].pageX - rect.left, touches[i].pageY - rect.top, 10, 0, 2 * Math.PI);
		context.strokeStyle = touch[touch.length - 1].color;
		context.fillStyle = touch[touch.length - 1].color;
		context.fill();
		context.stroke();
	}
		
}

function onTouchMove(e){
	var touches = e.changedTouches;
	
	for (var i = 0; i < touches.length; i++) {
		var color = "#FFFFFF";
		
		for (var j = 0; j < touch.length; i++){
			if(touches[i].identifier == touch[j].id) {
				color = touch.color;
				break;
			}
		}
		
		context.beginPath();
		context.arc(touches[i].pageX - rect.left, touches[i].pageY - rect.top, 10, 0, 2 * Math.PI);
		context.strokeStyle = color;
		context.fillStyle = color;
		context.fill();
		context.stroke();
	}
}
	