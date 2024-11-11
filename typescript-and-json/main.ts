const newArray = {
  isbn: '0123',
  title: 'Best Book Ever',
  author: 'Author Name',
};

console.log('newArray:', newArray, typeof newArray);

const jsonNewArray = JSON.stringify(newArray);
console.log(
  'typeof: jsonNewArray',
  typeof jsonNewArray,
  'jsonNewArray:',
  jsonNewArray
);
