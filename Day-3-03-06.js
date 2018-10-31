'use strict';

const cypher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

const sentence = 'craft block argon meter bells brown croon droop';
const word = sentence.split(' ');
let string = '';
//console.log(word);
word.forEach(function (x) { 
  for (var key in cypher){ 
    if(x.charAt(0) === key) {
      string += (x.charAt(cypher[key]-1));
    } 
  } 
  if(x.charAt(0) !== key) {
    string += '+';
  }
});

console.log(string);

// function decode(sentence) {
//   word = sentence.split(' ');
// }

//   let result = (' ');
//   for (let i = 0; i < word.length; i++) {
//     if (word[i][0] === 'a') {
//       result += word[i][1];
//     }  
//     if (word[i][0] === 'b') {
//       result += word[i][2];
//     }
//     if (word[i][0] === 'c') {
//       result += word[i][3];
//     }
//     if (word[i][0] === 'd') {
//       result += word[i][4];
//     }    
//   }  
//   console.log(result);
// }

// decode('craft block argon meter bells brown croon droop');
