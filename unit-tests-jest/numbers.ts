/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

/**
 * Returns the first element of the given array.
 */
export function firstElement(arr: any[]): any {
  return arr[0];
}

/**
 * Returns a new array with all numbers doubled.
 */
export function doubleNumbers(numbers: number[]): number[] {
  return numbers.map((n) => n * 2);
}

/**
 * Returns true if the number is positive, false otherwise.
 */
export function isPositive(n: number): boolean {
  return n > 0;
}

/**
 * Returns true if the string contains the word 'hello'.
 */
export function containsHello(str: string): boolean {
  return str.includes('Hello');
}

/**
 * Returns the last element of the given array.
 */
export function lastElement(arr: any[]): any {
  return arr[arr.length - 1];
}

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount: number): string {
  return `$${amount}.00`;
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 */
export function divideBy(numbers: number[], divisor: number): number[] {
  return numbers.map((num) => num / divisor);
}

/**
 * Reverses the given string.
 */
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * Returns the sum of all numbers in the array.
 */
export function sumArray(numbers: number[]): number {
  // Initialize a variable to keep track of the sum, starting at 0.
  let sum = 0;

  // Use a `for` loop to iterate over each number in the array.
  for (let i = 0; i < numbers.length; i++) {
    // Add the current number to the sum.
    sum += numbers[i];
  }

  // Return the total sum after the loop has finished.
  return sum;
}

/**
 * Capitalizes the first letter of each word in the string.
 */
// export function capitalizeWords(sentence: string): string {
//   return sentence
//   .split(' ')
//   .map(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//   .join(' ');
// }
