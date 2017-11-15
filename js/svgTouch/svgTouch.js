document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.15.1"


addEventListener("touchstart", onTouchStart);

function onTouchStart(e){
	var touches = e.changedTouches;
	
	for (var i = 0; i < touches.length; i++){
		var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		
		circle.setAttribute("cx", touches[i].pageX);
		circle.setAttribute("cy", touches[i].pageY);
		circle.setAttribute("r", 10);
		var svg = document.getElementById("svg");
		svg.appendChild(circle);
	}
		
}


