'use strict';

const myObj = {
  foo: 86,  
  bar: 75,
  fum: 30,
  quux: 9,
  spam: 'Jenny'
};

for (var key in myObj){
  console.log(key, myObj[key]);
}