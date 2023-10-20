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
}

// Function to display underscores for each letter in the word
function displayWordWithUnderscores() {
    let displayWord = "";
    for (let char of selectedWord) {
        if (guessedLetters.includes(char)) {
            displayWord += char;
        } else {
            displayWord += "_";
        }
    }
    document.getElementById("word-container").textContent = displayWord;
}

// Rest of the code remains the same...

// Initialize the
