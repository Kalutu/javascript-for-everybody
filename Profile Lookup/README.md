# Contact Lookup
This is a JavaScript program that allows you to look up contact information based on a given name and property. The program includes an array of contacts and a function lookUpProfile that performs the lookup operation.

## Usage
To use the lookUpProfile function, follow these steps:
- Initialize the contacts array with the desired set of contacts.
- Call the lookUpProfile function, passing the name of the contact you want to look up and the property you are interested in.
```
const contacts = [
  // Array of contacts
];

function lookUpProfile(name, prop) {
  // Implementation details of the function
}

// Example usage
lookUpProfile("Akira", "likes");
```
In the example above, you need to replace the contacts array with your desired set of contacts. Then, you can call the lookUpProfile function with the name of the contact you want to look up and the property you are interested in.<br>

The lookUpProfile function will search for the contact with the specified name in the contacts array. If a match is found, it will check if the contact has the specified property. If the property exists, it will return the corresponding value. If the property does not exist, it will return the string "No such property". If no contact with the given name is found, it will return the string "No such contact".<br>

Feel free to modify the lookUpProfile function or the contacts array to suit your needs.

## Credits
This project is based on a challenge from the freeCodeCamp CSS course.
