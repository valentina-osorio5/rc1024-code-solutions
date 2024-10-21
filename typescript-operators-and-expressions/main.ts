const width: number = 2;
const height: number = 2;
const area: number = width * height;

console.log('area:', area);
console.log('typeof area:', typeof area);

const bill: number = 10;
const payment: number = 20;
const change: number = payment - bill;
console.log('change:', change);
console.log('typeof change:', typeof change);

const quizzes: number = 5;
const midterm: number = 10;
const final: number = 15;
const grade: number = (quizzes + midterm + final) / 3;
console.log('grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName: string = 'Valentina ';
const lastName: string = 'Osorio';
const fullName: string = firstName + lastName;
console.log('fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH: number = 6;
const isAcidic: boolean = pH < 7;
console.log('isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount: number = 10;
const isSparta: boolean = headCount === 300;
console.log('isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto: string = fullName;
let motto: string = (motto += 'is the GOAT');
console.log('motto:', motto);
console.log('typeof motto:', typeof motto);
