document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.22.0";

var synt = window.speechSynthesis;

function getVoices(){
	var voices = synt.getVoices;
	for (int i = 0; i < voices.length; i++){
		document.getElementById("idVoices").innerHTML += voices[i].name + ": " + voices[i].lang + "<br>";
	}
}