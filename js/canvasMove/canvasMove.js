document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.22.0";

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var rectCanvas = canvas.getBoundingClientRect();
var img = document.getElementById("img");
var topX = 100;
var topY = 100;
var imgWidth = 100;
var imgHeight = 100;


img.onload = function (){
	var rect = img.getBoundingClientRect();
	context.drawImage(img, topX, topY, imgWidth, imgHeight);
}
canvas.addEventListener("touchmove", onTouchMove);

function onTouchMove(e){
	e.preventDefault();
	var touches = e.changedTouches;
	
	for (var i = 0; i < touches.length; i++){
		if( touches[i].pageX < topX + imgWidth  && touches[i].pageX >= topX &&
			touches[i].pageY < topY + imgHeight  && touches[i].pageY >= topY ) {
				context.clearRect();
				topX = touches[i].pageX - rectCanvas.left;
				topY = touches[i].pageY - rectCanvas.top;
				context.drawImage(img, topX, topY, imgWidth, imgHeight);
		}
	}
		
}


