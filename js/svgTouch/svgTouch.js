document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.15.0"


addEventListener("touchstart", onTouchStart);

function onTouchStart(e){
	var touches = e.changedTouches;
	
	for (var i = 0; i < touches.length; i++){
		var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		
		cerc.setAttribute("cx", touches[i].pageX);
		cerc.setAttribute("cy", touches[i].pageY);
		cerc.setAttribute("r", 10);
		var svg = document.getElementById("svg");
		svg.appendChild(circle);
	}
		
}


