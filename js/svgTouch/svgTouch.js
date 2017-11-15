document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.15.2"

addEventListener("touchstart", onTouchStart);

var svg = document.getElementById("svg");
var rect = svg.getBoundingClientRect();

function onTouchStart(e){
	var touches = e.changedTouches;
	
	for (var i = 0; i < touches.length; i++){
		var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		
		circle.setAttribute("cx", touches[i].pageX - rect.left);
		circle.setAttribute("cy", touches[i].pageY - rect.top);
		circle.setAttribute("r", 10);	
		svg.appendChild(circle);
	}
		
}


