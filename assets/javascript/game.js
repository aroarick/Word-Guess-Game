var winDisplayElement = document.getElementById("winDisplay");
var currentWordElement = document.getElementById("currentWord");
var remainingGuessesElement = document.getElementById("remainingGuesses");
var remainingLettersElement = document.getElementById("remainingLetters");
// //HANGMAN CHOICES
var wordOptions = ["walkman", "merlin", "atari", "swatch", "MASH", "Cheers", "ALF", "Seinfeld", "Ghostbusters", "Goonies", "Gremlins", "Footloose", "Foreigner", "Aerosmith", "Whitesnake", "Queen"];

var randomOption = wordOptions[Math.floor(Math.random()*wordOptions.length)].toLowerCase();
var completeAlphabet = [];
const numberGuesses = 10;
var completeWord = false;
var numberWins = 0;

function randomWord() {
    var html = "";
    for(var i = 0; i < randomOptionlength; i++) {
        if(completeAlphabet.indexOf(randomOption[i]) !== -1 || randomOption[i] === " ") {
            html += randomOption;
        } else {
            html += "_";
        }
    }
    currentWordElement.innerHTML = html;
}

function clearAll() {
    remainingGuessesElement.innerHTML = numberGuesses;
    completeAlphabet = [];
    completeAlphabet.innerHTML = "";
}

randomOption();
winDisplayElement.innerHTML = winDisplay;
remainingGuessesElement.innerHTML = remainingGuesses;