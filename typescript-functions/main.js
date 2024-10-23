'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('5 minutes in seconds:', convertMinutesToSeconds(5));
const minutes = 2;
console.log('2 minutes in seconds:', convertMinutesToSeconds(minutes));
console.log('1 minute in seconds:', convertMinutesToSeconds(1));
function greet(name) {
  const greeting = 'hey, ' + name + '!';
  return greeting;
}
console.log('greet function:', greet('Val'));
const getArea = (width, height) => {
  return width * height;
};
console.log('getArea:', getArea(5, 5));
const getFirstName = (person) => {
  return person.firstName;
};
console.log(
  'getFirstName:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);
const getLastElement = (array) => {
  return array[array.length - 1];
};
function callOtherFunction(otherFunction, params) {
  return console.log(`${otherFunction}:`, otherFunction(params));
}
callOtherFunction(convertMinutesToSeconds, 10);
callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']);
