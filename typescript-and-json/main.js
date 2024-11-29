const newArray = {
  isbn: '0123',
  title: 'Best Book Ever',
  author: 'Author Name',
};

console.log('newArray:', newArray, 'typeof newArray:', typeof newArray);

const jsonNewArray = JSON.stringify(newArray);
console.log(
  'typeof: jsonNewArray',
  typeof jsonNewArray,
  'jsonNewArray:',
  jsonNewArray
);

const studentJSON = `{"number-id": "012345", "name": "Valentina Osorio"}`;
console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

const newObj = JSON.parse(studentJSON);
console.log('newObj:', newObj);
console.log('typeof newObj:', typeof newObj);
