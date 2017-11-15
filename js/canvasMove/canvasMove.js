document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.15.0";

var canvas = document.getElementById("canvas");
var context = canvas.getAttentionContext("2d");
var rect = canvas.getBoundingClientRect();
var img = document.getElementById("img");

context.drawImage(img, 100, 100, 100, 100);

canvas.addEventListener("touchmove", onTouchMove);

function onTouchMove(e){
	e.preventDefault();
	var touches = e.changedTouches;
	
	for (var i = 0; i < touches.length; i++){
		var circle = touches[i].target;
		if( touches[i].pageX - rect.left <= rect.width  &&
			touches[i].pageY - rect.top <= rect.height  &&
			touches[i].pageX - rect.left >= 0  &&
			touches[i].pageY - rect.top >= 0 ){
				
			circle.setAttribute("cx", touches[i].pageX - rect.left);
			circle.setAttribute("cy", touches[i].pageY - rect.top);	
		}
	}
		
}


