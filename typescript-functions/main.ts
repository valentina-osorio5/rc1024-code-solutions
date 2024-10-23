function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

console.log('5 minutes in seconds:', convertMinutesToSeconds(5));
const minutes: number = 2;
console.log('2 minutes in seconds:', convertMinutesToSeconds(minutes));
console.log('1 minute in seconds:', convertMinutesToSeconds(1));

function greet(name: string): string {
  const greeting: string = 'hey, ' + name + '!';
  return greeting;
}

console.log('greet function:', greet('Val'));

const getArea = (width: number, height: number): number => {
  return width * height;
};

console.log('getArea:', getArea(5, 5));

interface Person {
  firstName: string;
  lastName: string;
}

const getFirstName = (person: Person): string => {
  return person.firstName;
};

console.log(
  'getFirstName:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

const getLastElement = (array: string): string => {
  return array[array.length - 1];
};

function callOtherFunction(otherFunction: Function, params: any): any {
  return console.log(`${otherFunction}:`, otherFunction(params));
}

callOtherFunction(convertMinutesToSeconds, 10);
callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']);
