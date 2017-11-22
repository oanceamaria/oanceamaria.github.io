document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.22.1";

var synt = window.speechSynthesis;

function getVoices(){
	var voices = synt.getVoices();
	for (var i = 0; i < voices.length; i++){
		document.getElementById("idVoices").innerHTML += voices[i].name + ": " + voices[i].lang + "<br>";
	}
}