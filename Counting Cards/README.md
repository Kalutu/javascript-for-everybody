# Card Counting
This is a simple JavaScript function that simulates card counting in a card game. It keeps track of the count based on the card values encountered and provides a recommendation of whether to "Bet" or "Hold" based on the current count.
In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck.
Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

## Usage
To use the cc function, follow these steps:
- Initialize the count variable to 0.
- Call the cc function, passing the value of the card drawn as an argument.
- The function will update the count variable based on the card value.
- The function will return a string indicating whether to "Bet" or "Hold" based on the current count.
```
let count = 0;

function cc(card) {
  // Implementation details of the function
}
console.log(cc('A'));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));
```
In the example above, the cc function is called with different card values ('A', 3, 7, 'K', 'A') multiple times. The output will depend on the current value of the count variable and will indicate whether to "Bet" or "Hold" based on the count.

## Card Counting System
The card counting system used in this function is as follows:
- If the card has a value of 2, 3, 4, 5, or 6, the count variable is incremented by 1.
- If the card has a value of 7, 8, or 9, the count variable remains unchanged (0).
- If the card has a value of 10, 'J', 'Q', 'K', or 'A', the count variable is decremented by 1.<br>

After updating the count variable, the function checks the value of the count variable and provides a recommendation based on the following rules:
- If the count is greater than 0, it recommends to "Bet".
- If the count is 0, it recommends to "Hold".
- If the count is less than 0, it recommends to "Hold".<br>
- 
Feel free to modify the cc function or the card counting system to suit your needs.

## Credits
This project is based on a challenge from the freeCodeCamp CSS course.
