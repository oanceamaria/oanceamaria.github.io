document.getElementById("idLogicV").innerHTML = "Business level version: 2018.01.10.0"; 

document.addEventListener("touchstart", vibrate);

function vibrate(){
	window.navigator.vibrate(200);
}



