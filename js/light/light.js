var d = new Date();
document.getElementById("idLogicV").innerHTML = "Business level version: " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 


window.addEventListener("devicelight", device_light);

function device_light(e){
	document.getElementById("id_light").innerHTML = 
		"value = " + e.value + " max = " + e.max;
}