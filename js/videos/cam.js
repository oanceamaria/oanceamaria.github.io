var d = new Date();
document.getElementById("idLogicV").innerHTML = "Business level version: " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".3"; 

var contraints = {audio: true, video:{facingMode:"environment"}};
navigator.mediaDevices.getUserMedia(contraints).then(on_success).catch(on_error);


var video = document.getElementById("videoId");

video.addEventListener("touchstart", snap);


var canvas = document.getElementById("id_canvas");

canvas.addEventListener("touchstart", download)

function on_success(stream){
	video.srcObject = stream;
}

function on_error(error){
	alert("Error"); 
}


function snap(){
	var context = canvas.getContext("2d");
	context.drawImage(video, 0, 0, 640, 480); 
}

function download(){
	var img = canvas.toDataURL("image/png");
	window.location.href = img;
}

