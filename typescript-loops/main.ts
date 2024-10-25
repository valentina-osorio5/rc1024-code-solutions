/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */

function getNumbersToTen(): number[] {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }

  return numbers;
}

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word: string, times: number): string {
  let count: number = 1;
  let repeated: string = ' ';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(str: string): string {
  for (let i = 0; i < str.length; ++i) {
    console.log(str[i]);
  }
}

function doubleAll(numbers: number[]): number[] {
  const doubled = [];
  for (let i = 0; i < numbers.length; ++i) {
    const newNumber = numbers[i] * 2;
    doubled.push(newNumber);
  }
  return doubled;
}

function sumArray(numbers: number[]): number {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

function reverseString(str: string): string {
  let reversed = ' ';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function getKeys(obj: Record<string, unknown>): string[] {
  const keys: any[] = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

function getValues(obj: Record<string, unknown>): unknown[] {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
