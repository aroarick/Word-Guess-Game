var winDisplayElement = document.getElementById("winDisplay");
var currentWordElement = document.getElementById("currentWord");
var remainingGuessesElement = document.getElementById("remainingGuesses");
var remainingLettersElement = document.getElementById("remainingLetters");

// //HANGMAN CHOICES
var wordOptions = ["walkman"];
// var wordOptions = ["walkman", "merlin", "atari", "swatch", "MASH", "Cheers", "ALF", "Seinfeld", "Ghostbusters", "Goonies", "Gremlins", "Footloose", "Foreigner", "Aerosmith", "Whitesnake", "Queen"];

var randomOption = wordOptions[Math.floor(Math.random() * wordOptions.length)].toLowerCase();
var completeAlphabet = [];
var numberGuesses = 10;
var guessCount = 0;
var guessesLeft = numberGuesses;
var completeWord = false;
var numberWins = 0;
var previousWord = "";

// BLANK SPACES FOR WORD
function randomWord() {
    var html = "";
    for (var i = 0; i < randomOption.length; i++) {
        if (completeAlphabet.indexOf(randomOption[i]) !== -1 || randomOption[i] === " ") {
            html += randomOption[i].toUpperCase();
        } else {
            html += "_";
        }
    }
    currentWordElement.innerHTML = html;
}

//CLEARING THE THING
function clearAll() {
    remainingGuessesElement.innerHTML = numberGuesses;
    guessCount = 0;
    guessesLeft = numberGuesses;
    completeAlphabet = [];
    completeAlphabet.innerHTML = "";

    var chosenLetters = document.getElementById("chosenLetters");
    for (var i = 0; i < chosenLetters.children.length; i++) {
        var currentLetter = chosenLetters.children[i];
        currentLetter.classList.remove("guessed");
    }

    var blinkingText = document.getElementById("blinking")
    blinkingText.classList.remove("hide");
}

//GENERATE RANDOM WORD
randomWord();
winDisplayElement.innerHTML = numberWins;
remainingGuessesElement.innerHTML = numberGuesses;

//WHEN PLAYER PUSHES BUTTON, A LETTER APPEARS
document.onkeydown = function (e) {
    var theKey = e.key;
    var theKeyCode = e.keyCode;
    var blinkingText = document.getElementById("blinking")
    blinkingText.classList.add("hide");

    if (theKeyCode >= 65 && theKeyCode <= 90 && completeAlphabet.indexOf(theKey) === -1) {
        completeAlphabet.push(theKey);

        var chosenLetters = document.getElementById("chosenLetters");
        for (var i = 0; i < chosenLetters.children.length; i++) {
            var currentLetter = chosenLetters.children[i];
            if (theKey.toUpperCase() === currentLetter.innerHTML) {
                currentLetter.classList.add("guessed");
            }
        }

        //WHEN PLAYER PUSHES BUTTON, NUMBER OF GUESSES LEFT GOES DOWN
        if (randomOption.indexOf(theKey) === -1) {
            guessCount++;
        }

        //WHAT HAPPENS IF THE PLAYER GOES OVER MAX-GUESSES
        if (guessCount >= numberGuesses) {
            clearAll();
            randomOption = wordOptions[Math.floor(Math.random() * wordOptions.length)].toLowerCase();
        } else {
            remainingGuessesElement.innerHTML = numberGuesses - guessCount;
        }

        var html = "";
        for (var i = 0; i < completeAlphabet.length; i++) {
            if (randomOption.indexOf(completeAlphabet[i]) === -1) {
                html += completeAlphabet[i].toUpperCase();
            }
        }

        remainingLettersElement.innerHTML = html;

        //GENERATE RANDOM WORD
        randomWord();

        //ADD WINS, PUT PREVIOUS WORD, START A NEW GAME
        var randomWordActive = document.getElementById("currentWord").innerHTML;
        if (randomWordActive.indexOf("_") === -1) {
            completeWord = false;
            numberWins++;
            winDisplayElement.innerHTML = numberWins;
            clearAll();
            previousWord = randomOption;
            randomOption = wordOptions[Math.floor(Math.random() * wordOptions.length)].toLowerCase();
            randomWord();
            setPreviousWords(previousWord);
        }
    }
}

function setPreviousWords(word) {
    var previousWords = document.getElementById("previousWords");
    console.log(word,previousWord);
    previousWords.innerHTML = word;
} 