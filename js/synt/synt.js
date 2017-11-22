document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.22.5";

var synt = window.speechSynthesis;

function getVoices(){
	var voices = synt.getVoices();
	for (var i = 0; i < voices.length; i++){
		document.getElementById("idVoices").innerHTML += voices[i].name + ": " + voices[i].lang + "<br>";
	}
}

function speak(){
	var enunt = new SpeechSynthesisUtterance();
	enunt.lang = "en_US";
	enunt.text = document.getElementById("idText").value;
	
	enunt.onerror = function (e){
		alert(e.error);
	}
	synt.speak(enunt);
}