document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.22.6";

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
	
	enunt.onend = function (e){
		document.getElementById("idButtonSpeak").dissable = false;
	}
	
	document.getElementById("idButtonSpeak").dissable = true;
	
	synt.speak(enunt);
}