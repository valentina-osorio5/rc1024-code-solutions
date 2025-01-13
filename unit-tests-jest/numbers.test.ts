import {
  evenNumbers,
  firstElement,
  doubleNumbers,
  isPositive,
  containsHello,
  lastElement,
  toDollars,
  divideBy,
  reverseString,
  sumArray,
  capitalizeWords,
} from './numbers';

test('finds even numbers', () => {
  const results = evenNumbers([1, 2, 3, 4, 5, 6]);
  expect(results).toEqual([2, 4, 6]);
});

test('finds first element', () => {
  const results = firstElement([1, 2, 3, 4, 5, 6]);
  expect(results).toEqual(1);
});

test('doubles the numbers', () => {
  const results = doubleNumbers([1, 2, 3, 4, 5, 6]);
  expect(results).toEqual([2, 4, 6, 8, 10, 12]);
});

test('is the number positive', () => {
  const results = isPositive(0);
  expect(results).toEqual(false);
});

test('string contains hello', () => {
  const results = containsHello('hi Hello how you doin');
  expect(results).toEqual(true);
});

test('returns last element', () => {
  const results = lastElement([1, 2, 3, 4, 5, 6]);
  expect(results).toEqual(6);
});

test('returns in dollar format', () => {
  const results = toDollars(20);
  expect(results).toEqual('$20.00');
});

test('divideBy', () => {
  const results = divideBy([2, 4, 6, 8], 2);
  expect(results).toEqual([1, 2, 3, 4]);
});

test('reverse string', () => {
  const results = reverseString('hello');
  expect(results).toEqual('olleh');
});

test('sum of numbers in array', () => {
  const results = sumArray([1, 2, 3, 4]);
  expect(results).toEqual(10);
});

test('capitalize first letter of each word', () => {
  const results = capitalizeWords('hey hello how are you?');
  expect(results).toBe('Hey Hello How Are You?');
});
