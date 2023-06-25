# Drop it
The `dropElements` function is a utility function that removes elements from the beginning of an array until a specific condition is satisfied. This function is useful when you want to drop elements from an array based on a given condition.

## Usage
```javascript
const arr = [1, 2, 3, 4];
const isEven = num => num % 2 === 0;

const result = dropElements(arr, isEven);
console.log(result); // [2, 3, 4]

