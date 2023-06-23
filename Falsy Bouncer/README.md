# Falsy Bouncer
A JavaScript function that filters out falsy values from an array and returns a new array containing only the truthy values.

## Usage

```javascript
const arr = [0, "hello", "", 42, null, "world", false, true];
const result = bouncer(arr);
console.log(result);
// Output: ["hello", 42, "world", true]

