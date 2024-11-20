'use strict';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
const evens = numbers.filter((number) => number % 2 === 0);
console.log('evens', evens);
const filteredNames = names.filter(filterD);
console.log('filteredNames', filteredNames);
function filterD(name) {
  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    if (char === 'd' || char === 'D') {
      return false;
    }
  }
  return true;
}
