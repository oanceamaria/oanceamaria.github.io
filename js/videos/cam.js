var d = new Date();
document.getElementById("idLogicV").innerHTML = "Business level version: " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 

var contraints = {audio: true, video:{facingMode:"environment"}};
navigator.mediaDevices.getUserMedia(contraints).then(on_success).catch(on_error);

var video = document.getElementById("videoId");

function on_success(stream){
	video.srcObject = stream;
}

function on_error(error){
	alert("Error");
}




