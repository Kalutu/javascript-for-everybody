# Record Collection
This is a JavaScript program that allows you to update a record collection. The program includes a function updateRecords that takes a records object, an id, a prop, and a value as parameters. It updates the records based on certain conditions and returns the modified records object.

## Usage
To use the updateRecords function, follow these steps:
- Initialize a recordCollection object with the initial set of records.
- Call the updateRecords function, passing the recordCollection object, an id of the record you want to update, a prop indicating the property you want to modify, and the new value you want to assign.
```
const recordCollection = {
  // Initial set of records
};

function updateRecords(records, id, prop, value) {
  // Implementation details of the function
}

// Example usage
updateRecords(recordCollection, id, prop, value);

```
In the example above, you need to replace recordCollection with your initial set of records and provide the appropriate id, prop, and value for the record you want to update. The function will modify the records based on the specified conditions.

## Updating Records
The updateRecords function performs the following operations based on the conditions:
- If the prop is not 'tracks' and the value is not an empty string, it updates the prop value of the record with the provided id to the given value.
- If the prop is 'tracks' and the record does not have a 'tracks' property, it adds an array with the given value as the first element as the 'tracks' property of the record.
- If the prop is 'tracks' and the value is not an empty string, it pushes the value into the array of the 'tracks' property of the record with the provided id.
- If the value is an empty string, it deletes the prop from the record with the provided id.<br>

Feel free to modify the updateRecords function or the record collection to suit your needs.

## Credits
This project is based on a challenge from the freeCodeCamp CSS course.
