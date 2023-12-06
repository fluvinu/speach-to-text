let button = document.querySelector("button");
let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);

if (!recognition) {
    alert('nt wrk brwsr prblm');
} else {
    button.addEventListener("click", () => {
        recognition.start();
    });

    recognition.onresult = function (event) {
        console.log(event);
        let transcript = event.results[0][0].transcript;
        document.getElementById('output').innerHTML = transcript;
        transcript = transcript.replace(/[.\s]/g, ""); 
        let lowerTranscript = transcript.toLowerCase();
        document.body.style.backgroundColor = lowerTranscript;
        
    }
}
