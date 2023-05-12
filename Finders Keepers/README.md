# Find Element
A JavaScript function to find the first element in an array that satisfies a given condition.

## Description
The `findElement` function takes an array and a callback function as input. It iterates through the array and returns the first element for which the callback function returns `true`. If no element satisfies the condition, `undefined` is returned.

## Usage
```javascript
const numbers = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;

const result = findElement(numbers, isEven);
console.log(result); // Output: 2
