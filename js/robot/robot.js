document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.29.0";

document.addEventListener("touchstart", onTouchStart);

var recognition = new webkitSpeechRecognition();

recognition.lang = "en-US";
recognition.onresult = onSpeechResult;
recognition.onsoundend = onSoundEnd;

var synt = window.speechSynthesis;


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
		document.getElementById("id_p").innerHTML += alternatives[i].transcript + " (" + alternatives[i].confidence + ")" + "<br>";
		switch(alternatives[i].transcript) {
			case "go forward": speek("moving forward");
								  break;
			case "go backward": speek("moving backward");
								  break;
			default: speek("I am stupid!");
					break;
		}
	}
}

function onSoundEnd(e){
	recognition.stop();
}


function speak( txt){
	var enunt = new SpeechSynthesisUtterance();
	enunt.lang = "en-US";
	enunt.text = txt;

	enunt.onend = function (e){
		isListening = false;
	}
	
	synt.speak(enunt);
}