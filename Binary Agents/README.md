# Binary Agent
The `binaryAgent` function is a JavaScript function that converts a binary string into its corresponding Unicode characters.

### Usage
The `binaryAgent` function takes a binary string as input and converts each binary number to its decimal equivalent. It then converts the decimal value to its corresponding Unicode character using the `String.fromCharCode()` method. Finally, it joins all the characters together and returns the resulting string.

To use the `binaryAgent` function, follow these steps:

1. Provide a binary string as input to the function.
2. Each binary number in the string should be separated by spaces.
3. Call the `binaryAgent` function with the binary string as the argument.

Example usage:

```javascript
const binaryString = "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111";
const result = binaryAgent(binaryString);
console.log(result);
// Output: "Aren't bonfires fun!?"


