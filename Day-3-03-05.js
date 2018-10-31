'use strict';

// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.

const obj1 = {
  name: 'Bruce Willis',
  jobTitle: 'Badass',
  boss: 'Spielberg',
};
const obj2 = {
  name: 'Angelina Jolie',
  jobTitle: 'Tomb Raider',
  boss: 'Spielberg',
};
const obj3 = {
  name: 'Johnny Depp',
  jobTitle: 'Captain Jack Sparrow',
  boss: 'Spielberg',
};
  
const obj4 = {
  name: 'Spielberg',
  jobTitle: 'Director',
};  

const myArray = [
  obj1, obj2, obj3, obj4
];

for (var key in myArray) {
  if (myArray[key].boss) {
    console.log(`${myArray[key].jobTitle} ${myArray[key].name} reports to ${myArray[key].boss}.`);
  } else {
    console.log(`${myArray[key].jobTitle} ${myArray[key].name} doesn't report to anybody.`);
  }
}  

