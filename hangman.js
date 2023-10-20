// Array of words to choose from
const words = ["tyler", "bug", "stinky"];

// Select a random word from the array
let selectedWord = words[Math.floor(Math.random() * words.length)];

// Array to store guessed letters
let guessedLetters = [];

// Number of attempts allowed
let attempts = 6;

// Function to initialize the game
function initializeGame() {
    // Display underscores for each letter in the selected word
    displayWordWithUnderscores();

    // Display remaining attempts
    document.getElementById("attempts-container").textContent = `Attempts remaining: ${attempts}`;

    // Display clickable letters
    displayClickableLetters();
}

// Function to display clickable letters
function displayClickableLetters() {
    let lettersContainer = document.getElementById("letters-container");
    lettersContainer.innerHTML = "";

    for (let i = 97; i <= 122; i++) { // ASCII codes for lowercase letters
        let letter = String.fromCharCode(i);
        let letterButton = document.createElement("button");
        letterButton.textContent = letter;
        letterButton.onclick = function() {
            makeGuess(letter);
        };
        lettersContainer.appendChild(letterButton);

        // Disable the button if the letter has already been guessed
        if (guessedLetters.includes(letter)) {
            letterButton.disabled = true;
            letterButton.style.backgroundColor = "#dddddd"; // Gray out the guessed letters
        }
    }
}

// Function to make a guess
function makeGuess(letter) {
    // Check if the letter has not been guessed before
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);

        // Check if the guessed letter is in the selected word
        if (selectedWord.includes(letter)) {
            updateDisplayWord();
        } else {
            attempts--;
        }

        // Display the guessed letters and remaining attempts
        document.getElementById("guesses-container").textContent = `Guessed letters: ${guessedLetters.join(", ")}`;
        document.getElementById("attempts-container").textContent = `Attempts remaining: ${attempts}`;

        // Check if the game is won or lost
        if (isGameWon()) {
            alert("Congratulations! You won!");
            resetGame();
        } else if (attempts === 0) {
            alert(`Sorry, you lost. The correct word was "${selectedWord}".`);
            resetGame();
        }

        // Update clickable letters after making a guess
        displayClickableLetters();
    } else {
        alert("You already guessed that letter. Try another one.");
    }
}

// Function to update the displayed word with correctly guessed letters
function updateDisplayWord() {
    displayWordWithUnderscores();
}

// Function to display underscores for each letter in the word
function displayWordWithUnderscores() {
    let displayWord = "";
    for (let char of selectedWord) {
        if (guessedLetters.includes(char)) {
            displayWord += char + " ";
        } else {
            displayWord += "_ ";
        }
    }
    document.getElementById("word-container").textContent = displayWord.trim(); // Trim to remove trailing space
}

// Function to check if the game
