var message = document.querySelector('#message');
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammer = '#JSGF V1.0;';

var recognition = new SpeechRecognition();
var speechRecognitionGrammarList = new SpeechGrammarList();
speechRecognitionGrammarList.addFromString(grammer, 1);

recognition.grammers = speechRecognitionGrammarList;
recognition.lang = 'en-US';
recognition.interimResults = false;


recognition.onresult = function(e) {
  var last = e.result.length - 1;
  var command = e.results[last][0].transcript;
  message.textContent = 'Voice input' + command + '.';

  if(command.toLowerCase() === 'select steve'){
    document.querySelector('#chkSteve').checked = true;
  }else if(command.toLowerCase() === 'select tony'){
    document.querySelector('#chkTony').checked = true;
  }else if(command.toLowerCase() === 'select bruce'){
    document.querySelector('#chkBruce').checked = true;
  }else if(command.toLowerCase() === 'select nick'){
    document.querySelector('#chkNick').checked = true;
  }
};

recognition.onspeechend = function(){
  recognition.stop();
};

recognition.onerror = function(e){
  message.textContent = 'Error occured in recognition: ' + e.error;
}

document.querySelector('#btnGiveCommand').addEventListener('click', function(){
  recognition.start();
});