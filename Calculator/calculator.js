// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to perform division
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    } else {
        return a / b;
    }
}

// Test the functions
console.log("5 + 3 =", add(5, 3));
console.log("5 - 3 =", subtract(5, 3));
console.log("5 * 3 =", multiply(5, 3));
console.log("5 / 3 =", divide(5, 3));
console.log("5 / 0 =", divide(5, 0));
