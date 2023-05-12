function reverseString(str){
    return str.split("").reverse().join();
}

let inputString = "Hello";
let reversed = reverseString(inputString);
console.log(reversed);
