document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.22.8";

var synt = window.speechSynthesis;

function getVoices(){
	var voices = synt.getVoices();
	for (var i = 0; i < voices.length; i++){
		var e = document.createElement("option");
		e.text = voices[i].lang;
		document.getElementById("idVoices").add(e);
	}
}

function speak(){
	var enunt = new SpeechSynthesisUtterance();
	enunt.lang = document.getElementById("idVoices").value;
	enunt.text = document.getElementById("idText").value;
	
	enunt.onerror = function (e){
		alert(e.error);
	}
	
	enunt.onend = function (e){
		document.getElementById("idButtonSpeak").disabled = false;
	}
	
	document.getElementById("idButtonSpeak").disabled = true;
	
	synt.speak(enunt);
}