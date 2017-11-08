document.getElementById("idLogicV").innerHTML = "Business level version: 2017.11.08.10"

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
	e.preventDefault();
	var touches = e.changedTouches;
	
	for (var i = 0; i < touches.length; i++){
		touch.push({id:touches[i].identifier, color:genRendColor(), x:touches[i].pageX, y:touches[i].pageY});
		context.beginPath();
		context.arc(touches[i].pageX - rect.left, touches[i].pageY - rect.top, 10, 0, 2 * Math.PI);
		context.strokeStyle = touch[touch.length - 1].color;
		context.fillStyle = touch[touch.length - 1].color;
		context.fill();
		context.stroke();
	}
		
}

function onTouchMove(e){
	e.preventDefault();
	var touches = e.changedTouches;
	
	for (var i = 0; i < touches.length; i++) {
		var color = "#FFFFFF";
		var j;
		for ( j = 0; j < touch.length; j++){
			if(touches[i].identifier == touch[j].id) {
				color = touch[j].color;
				break;
			}
		}
		
		context.beginPath();
		context.moveTo(touch[j].x - rect.left, touch[j].x.y - rect.top);
		context.lineWidth = 20;
		context.lineTo(touches[i].pageX - rect.left, touches[i].pageY - rect.top);
		context.arc(touches[i].pageX - rect.left, touches[i].pageY - rect.top, 10, 0, 2 * Math.PI);
		context.strokeStyle = color;
		context.fillStyle = color;
		context.fill();
		context.stroke();
		
		touch[j].x = touches[i].pageX;
		touch[j].y = touches[i].pageY;
		
	}
}
	