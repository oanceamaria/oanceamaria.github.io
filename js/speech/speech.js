document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.29.0";

document.addEventListener("touchstart", onTouchStart);

var recognition = new webkitSpeechRecognition();

recognition.lang = "en-US";
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
	document.getElementById("id_p").innerHTML = e.results[0][0].transcript + " (" + e.results[0][0].confidence + ")";
}

function onSoundEnd(e){
	recognition.stop();
	isListening = false;
}