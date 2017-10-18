window.addEventListener('deviceorientation',ondeviceorientation );

function ondeviceorientation(event) { 
	document.getElementById("id_alpha").innerHTML = "Alpha: " + Math.round(event.alpha * 100) / 100;
	document.getElementById("id_beta").innerHTML = "Beta: " + Math.round(event.beta * 100) / 100;
	document.getElementById("id_gama").innerHTML = "Gama: " + Math.round(event.gamma * 100) / 100;
	
}