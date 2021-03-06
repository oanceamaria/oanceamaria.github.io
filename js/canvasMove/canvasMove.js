document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.22.6";

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var rectCanvas = canvas.getBoundingClientRect();
var img = document.getElementById("img");
var topX = 100;
var topY = 100;
var imgWidth = 100;
var imgHeight = 100;
var offsetInsideImgX;
var offsetInsideImgY;


img.onload = function (){
	var rect = img.getBoundingClientRect();
	context.drawImage(img, topX, topY, imgWidth, imgHeight);
}
canvas.addEventListener("touchmove", onTouchMove);
canvas.addEventListener("touchstart", onTouchStart);


function onTouchStart(e){
	e.preventDefault();
	var touches = e.changedTouches;
	
	for (var i = 0; i < touches.length; i++){
		if( touches[i].pageX - rectCanvas.left < topX + imgWidth  && touches[i].pageX - rectCanvas.left >= topX &&
			touches[i].pageY - rectCanvas.top < topY + imgHeight  && touches[i].pageY - rectCanvas.top >= topY ) {
				offsetInsideImgX = ( touches[i].pageX - rectCanvas.left ) - topX ;
				offsetInsideImgY = ( touches[i].pageY - rectCanvas.top ) - topY ;
			}
	}
}

function onTouchMove(e){
	e.preventDefault();
	var touches = e.changedTouches;
	
	for (var i = 0; i < touches.length; i++){
		if( touches[i].pageX - rectCanvas.left < topX + imgWidth  && touches[i].pageX - rectCanvas.left >= topX &&
			touches[i].pageY - rectCanvas.top < topY + imgHeight  && touches[i].pageY - rectCanvas.top >= topY ) {
				context.clearRect(0, 0, 800, 600 );
				topX = touches[i].pageX - rectCanvas.left - offsetInsideImgX;
				topY = touches[i].pageY - rectCanvas.top - offsetInsideImgY;
				context.drawImage(img, topX, topY, imgWidth, imgHeight); 
		}
	}
		
}


