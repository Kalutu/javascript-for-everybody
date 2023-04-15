// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Initialize the number of guesses to 0
let numOfGuesses = 0;

// Get the input field and button elements from the DOM
const inputField = document.getElementById("guessInput");
const submitButton = document.getElementById("submitGuess");

// Add a click event listener to the submit button
submitButton.addEventListener("click", function() {
  // Get the user's guess from the input field
  const userGuess = parseInt(inputField.value);

  // Increment the number of guesses
  numOfGuesses++;

  // Check if the user's guess is correct
  if (userGuess === randomNumber) {
    // Display a message indicating that the user won
    alert(`Congratulations! You guessed the number in ${numOfGuesses} guesses.`);
  } else if (userGuess < randomNumber) {
    // Display a message indicating that the user's guess is too low
    alert("Too low. Try again.");
  } else {
    // Display a message indicating that the user's guess is too high
    alert("Too high. Try again.");
  }
});

