window.addEventListener('deviceorientation',ondeviceorientation );

function ondeviceorientation(event) { 
	document.getElementById("id_alpha").innerHTML = "Alpha: " + event.alpha;
	document.getElementById("id_beta").innerHTML = "Beta: " + event.beta;
	document.getElementById("id_gama").innerHTML = "Gama: " + event.gama;
	
}