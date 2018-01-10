var d = new Date();
document.getElementById("idLogicV").innerHTML = "Business level version: " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".2"; 

var contraints = {audio: true, video:{facingMode:"environment"}};
navigator.mediaDevices.getUserMedia(contraints).then(on_success).catch(on_error);


var video = document.getElementById("videoId");

video.addEventListener("touchstart", snap)

function on_success(stream){
	video.srcObject = stream;
}

function on_error(error){
	alert("Error"); 
}


function snap(){
	var canvas = document.getElementById("id_canvas");
	var context = canvas.getContext("2d");
	context.drawImage(video, 0, 0, 640, 480); 
}

