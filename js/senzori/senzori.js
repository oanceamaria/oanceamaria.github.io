document.getElementById("idLogicV").innerHTML = "Business level version: 2017.11.01.2"

window.addEventListener('deviceorientation',ondeviceorientation );
window.addEventListener('devicemotion',ondevicemotion );

function deseneazaCercSvg(gamma, beta){
	var svg = document.getElementById("svg");
	var w = svg.getAttribute("width");
	var h = svg.getAttribute("height");
	
	var cerc = document.getElementById("cerc");
	var centru = {x : w / 2, y : h / 2};
	var raza = cerc.getAttribute("r");
	var maxDeplasareX = w / 2 - raza;
	var maxDeplasareY = h / 2 - raza;
	
	cerc.setAttribute("cx", centru.x + gamma / 90 * maxDeplasareX);
	cerc.setAttribute("cy", centru.y + beta / 90 * maxDeplasareY);
	
}

function deseneazaCercCanvas(gamma, beta){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	context.beginPath();
	var w = canvas.getAttribute("width");
	var h = canvas.getAttribute("height");
	var centru = {x : w / 2, y : h / 2};
	var raza = 10;
	var maxDeplasareX = w / 2 - raza;
	var maxDeplasareY = h / 2 - raza;
	
	context.clearRect(0, 0, w, h);
	
	context.arc(centru.x + gamma / 90 * maxDeplasareX, centru.y + beta / 90 * maxDeplasareY, raza, 0, 2 * Math.PI);
	context.stroke();

}

function ondeviceorientation(event) { 
	var alpha = event.alpha;
	var beta = event.beta;
	var gamma = event.gamma;
	document.getElementById("id_alpha").innerHTML = "Alpha: " + Math.round(alpha * 10) / 10;
	document.getElementById("id_beta").innerHTML = "Beta: " + Math.round(beta * 10) / 10;
	document.getElementById("id_gama").innerHTML = "Gamma: " + Math.round(gamma * 10) / 10;	
}

function ondevicemotion(event){
	document.getElementById("acc").innerHTML = "Aceleration >>>  X: " + (Math.round(event.acceleration.x * 10) / 10) + " Y: " + (Math.round(event.acceleration.y * 10) / 10) + " Z: " + (Math.round(event.acceleration.z * 10) / 10);
	var ag = event.accelerationIncludingGravity;
	var gamma = - Math.atan(ag.x / ag.z) * 180 / Math.PI;
	var beta = Math.atan(ag.y / ag.z) * 180 / Math.PI;
	
	document.getElementById("accG").innerHTML = "AcelerationG >>>  X: " + (Math.round(ag.x * 10) / 10) + " Y: " + (Math.round(ag.y * 10) / 10) + " Z: " + (Math.round(ag.z * 10) / 10) +
												"<br> Inaclinare >>> Gamma: " + (Math.round(gamma * 10) / 10) + " Beta: " + (Math.round(beta * 10) / 10);
	
	
	deseneazaCercCanvas(gamma, beta);	
	deseneazaCercSvg(gamma, beta);
}

