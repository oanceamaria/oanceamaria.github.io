document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.29.4";

document.addEventListener("touchstart", onTouchStart);

var recognition = new webkitSpeechRecognition();

recognition.lang = "ro-RO";
recognition.maxAlternatives = 5;
recognition.onresult = onSpeechResult;
recognition.onsoundend = onSoundEnd;

var isListening = false;

function onTouchStart(e){
	if( !isListening ){
		recognition.start();
		isListening = true;
	}
}

function onSpeechResult(e){
	var alternatives = e.results[0];
	for (var i = 0; i < alternatives.length; i++){
		document.getElementById("id_p").innerHTML = alternatives[i].transcript + " (" + alternatives[i].confidence + ")" + "<br>";
	}
}

function onSoundEnd(e){
	recognition.stop();
	isListening = false;
}