const colors: string[] = ['red', 'white', 'blue'];

console.log('colors array:', colors);

console.log('value of color [0]:', colors[0]);
console.log('value of color [1]:', colors[1]);
console.log('value of color [2]:', colors[2]);

const templateLiteral: string = `America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;
console.log(templateLiteral);

colors[2] = `green`;
console.log(colors[2]);

const mexico: string = `Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;
console.log(mexico);

console.log('new colors array:', colors);
console.log('typeof colors array:', typeof colors);

const students: string[] = ['Val', 'Marly', 'Jess', 'Trouble'];

const numberOfStudents: number = students.length;
console.log('There are ' + numberOfStudents + ' students in the class.');

const lastIndex: string = students[numberOfStudents - 1];
const lastStudent: string = lastIndex;
console.log('The last student in the array is', lastStudent);

console.log('students array:', students);
console.log('typeof students array:', typeof students);
