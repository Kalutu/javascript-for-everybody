function reverseString(str){
    return str.split("").reverse().join();
}

let inputString = "Hello, World!";
let reversed = reverseString(inputString);
console.log(reversed);
