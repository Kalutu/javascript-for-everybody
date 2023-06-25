# Steam Roller
The `steamrollArray` function is a utility function that flattens a given nested array into a one-dimensional array. It recursively traverses the array and copies the contents of non-array elements while flattening nested arrays.

## Usage

```javascript
const result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result); // [1, 2, 3, 4]

