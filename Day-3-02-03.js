'use strict';

// you can pass in `scratchData` to test out `findByid`
// your function
const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];
  
function findById(items, idNum) {
    return items.find(x => x.id === idNum);
}
  
console.log(findById(scratchData, 28));


// function findById(items, idNum) {
//     for (let i = 0; i < items.length; i++) {
//         if (idNum === items[i].id) {
//             return items[i];
//         }
//     }
// }




// // grab the Array item which matchs the id "2"
// var item = myArray.find(item => item.id === 2);

// // print
// console.log(item.name);

//
  
//   function testIt() {
//     const testData = [
//       { id: 1, foo: 'bar' },
//       { id: 2, foo: 'bizz' },
//       { id: 3, bang: 'boo' },
//     ];
//     const result = findById(testData, 3);
//     if (!(result && result !== null && typeof result === 'object')) {
//       console.error('`findById` must return an object');
//       return;
//     }
//     if (result.id !== 3) {
//       console.error(
//         'Asked for item with id of `3` but got back one with id of ' + result.id
//       );
//       return;
//     }
//     if (result.bang !== 'boo') {
//       console.error(
//         'Expected all key/value pairs from target object to be returned'
//       );
//       return;
//     }
//     console.log('SUCCESS: `findByid` is working');
//   }
  
//   testIt();
  