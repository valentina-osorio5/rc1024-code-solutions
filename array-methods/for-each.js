'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('In order:');
values.forEach((element) => console.log(element));
// values.forEach(arrayFunction)9));
console.log('Reverse order:');
values.forEach((n, index) => console.log(values[values.length - 1 - index]));
// values.forEach(function (n, index) {
//   console.log("n", n); // current item in values array
//   console.log("index: ", index);
//   console.log(values[values.length - 1 - index])})
