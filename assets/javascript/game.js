// //PRESS ANY KEY TO GET STARTED
// var startGame = document.getElementById('startGame');

// function pressed() {
//     startGame.classList.add('hideMe');
// }

// function unload() {
//     window.removeEventListener('keypress', pressed, false);
//     window.removeEventListener('unload', unload, false);
// }

// window.addEventListener('keypress', pressed, false);
// window.addEventListener('unload', unload, false);

// //HANGMAN CHOICES
// var Things = ["walkman", "merlin", "atari", "swatch"];
// var Shows = ["MASH", "Cheers", "ALF", "Seinfeld",]; 
// var Movies = ["Ghostbusters", "Goonies", "Gremlins", "Footloose"]; 
// var Music = ["Foreigner", "Aerosmith", "Whitesnake", "Queen"];

// var anyKey = document.querySelector('#startGame');

// anyKey.addEventListener("click", function(){
//    releaseEvents(); 
// });

var userText = document.getElementById("user-text");
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function(event) {
    userText.textContent = event.key;
};

