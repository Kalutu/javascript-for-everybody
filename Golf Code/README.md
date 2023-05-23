# Golf Code
This is a simple JavaScript function that calculates a golfer's score based on the number of strokes taken and the expected number of strokes for a hole.
In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

## Usage
To use the golfScore function, follow these steps:
- Define the expected number of strokes for the hole (referred to as par).
- Specify the actual number of strokes taken by the golfer (referred to as strokes).
- Call the golfScore function, passing the par and strokes as arguments.
- The function will return a string indicating the golfer's score.
```
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Implementation details of the function
}

console.log(golfScore(5, 8));
```
In the example above, the golfScore function is called with par set to 5 and strokes set to 8. The output will be "Go Home!" since the number of strokes (8) is greater than the par (5) plus 2, as defined in the function.

## Scoring System
The scoring system used in this function is as follows:

If the golfer completes the hole in a single stroke (strokes == 1), the score is "Hole-in-one!".
If the golfer completes the hole in par - 2 strokes or fewer, the score is "Eagle".
If the golfer completes the hole in par - 1 strokes, the score is "Birdie".
If the golfer completes the hole in exactly par strokes, the score is "Par".
If the golfer completes the hole in par + 1 strokes, the score is "Bogey".
If the golfer completes the hole in par + 2 strokes, the score is "Double Bogey".
If the golfer takes par + 3 strokes or more, the score is "Go Home!".
Please note that the scoring system and the corresponding strings are defined within the names array.

Feel free to modify the golfScore function or the scoring system to suit your needs.

## Credits
This project is based on a challenge from the freeCodeCamp CSS course.
