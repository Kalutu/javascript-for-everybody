# DNA Pairing
The `pairElement` function is a JavaScript function that takes a string as input and returns an array of arrays representing the DNA base pairs for each character in the input string.

## Usage
```javascript
pairElement("GCG");
```
The above code will return the base pair arrays for the input string "GCG".

## Function Description
The `pairElement` function is a JavaScript function that takes a string as input and returns an array of arrays representing the DNA base pairs for each character in the input string.

### Parameters

- `str` (string): The input string for which base pairs need to be determined.

### Return Value

- An array of arrays representing the DNA base pairs for each character in the input string.

### Implementation Details

The `pairElement` function performs the following steps:

1. Defines an inner function called `matchWithBasePair` which matches each character with its corresponding DNA base pair.

2. Initializes an empty array called `pairs` to store the base pair arrays.

3. Iterates through each character in the input string and calls the `matchWithBasePair` function to get the base pair array for each character. These arrays are then pushed into the `pairs` array.

4. Finally, the `pairs` array is returned as the result.

### Example

```javascript
const result = pairElement("GCG");
console.log(result);

