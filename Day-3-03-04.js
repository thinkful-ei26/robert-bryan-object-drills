// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.
'use strict';

const obj1 = {
  name: 'Bruce Willis',
  jobTitle: 'Badass',
};
const obj2 = {
  name: 'Angelina Jolie',
  jobTitle: 'Tomb Raider',
};
const obj3 = {
  name: 'Johnny Depp',
  jobTitle: 'Captain Jack Sparrow',
};

const myArray = [
  obj1, obj2, obj3
];

for (var key in myArray) {
  console.log(myArray[key]);
}
