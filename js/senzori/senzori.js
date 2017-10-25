document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.10.25.1"

window.addEventListener('deviceorientation',ondeviceorientation );
window.addEventListener('devicemotion',ondevicemotion );

function ondeviceorientation(event) { 
	document.getElementById("id_alpha").innerHTML = "Alpha: " + Math.round(event.alpha * 10) / 10;
	document.getElementById("id_beta").innerHTML = "Beta: " + Math.round(event.beta * 10) / 10;
	document.getElementById("id_gama").innerHTML = "Gama: " + Math.round(event.gamma * 10) / 10;	
}

function ondevicemotion(event){
	document.getElementById("acc").innerHTML = "Aceleration >>>  X: " + (Math.round(event.acceleration.x * 10) / 10) + " Y: " + (Math.round(event.acceleration.y * 10) / 10) + " Z: " + (Math.round(event.acceleration.z * 10) / 10);
	var ag = event.accelerationIncludingGravity;
	var xInclin = Math.atan(ag.x / ag.z);
	var yInclin = Math.atan(ag.y / ag.z);
	
	document.getElementById("accG").innerHTML = "AcelerationG >>>  X: " + (Math.round(ag.x * 10) / 10) + " Y: " + (Math.round(ag.y * 10) / 10) + " Z: " + (Math.round(ag.z * 10) / 10) + 
												"<br> Inaclinare >>> X: " + xInclin + " Y: " + yInclin;
}