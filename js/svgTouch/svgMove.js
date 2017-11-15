document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.15.0"

var circleR = document.getElementById("circleRed");
var circleG = document.getElementById("circleGreen");


circleR.addEventListener("touchmove", onTouchMove);
circleG.addEventListener("touchmove", onTouchMove);

var svg = document.getElementById("svg");
var rect = svg.getBoundingClientRect();

function onTouchMove(e){
	var touches = e.changedTouches;
	
	for (var i = 0; i < touches.length; i++){
		var circle = touches[i].target;
		
		circle.setAttribute("cx", touches[i].pageX - rect.left);
		circle.setAttribute("cy", touches[i].pageY - rect.top);	
	}
		
}


