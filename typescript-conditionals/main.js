'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  return number < 5;
}
console.log('is 4 under five:', isUnderFive(4));
function isEvenNumber(number) {
  return number % 2 === 0;
}
console.log('is 5 even:', isEvenNumber(5));
console.log('is 10 even:', isEvenNumber(10));
function startsWithJ(string) {
  return string[0] === 'J';
}
console.log('does hi start with "J"?:', startsWithJ('hi'));
console.log('does joe start with "J"?:', startsWithJ('joe'));
console.log('does Joe start with "J"?:', startsWithJ('Joe'));
const person = { name: 'Val', age: 20 };
function isOldEnoughToDrink(person) {
  return person.age >= 21;
}
console.log(
  'is 20 y/o person old enough to drink?:',
  isOldEnoughToDrink(person)
);
const person2 = { name: 'Mel', age: 23 };
console.log(
  'is 23 y/o person old enough to drink?:',
  isOldEnoughToDrink(person2)
);
function isOldEnoughToDrive(person) {
  return person.age >= 16;
}
const person3 = { name: 'JJ', age: 15 };
console.log(
  'is 15 y/o person old enough to drive?:',
  isOldEnoughToDrive(person3)
);
console.log(
  'is 23 y/o person old enough to drive?:',
  isOldEnoughToDrive(person2)
);
function isOldEnoughToDrinkAndDrive(person) {
  return 'false';
}
console.log(
  'is anyone of any age allowed to drink and drive?:',
  isOldEnoughToDrinkAndDrive(person)
);
function categorizeAcidity(pH) {
  if (pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log('what is a pH of 1 called:', categorizeAcidity(1));
console.log('what is a pH of 10 called:', categorizeAcidity(10));
console.log('what is a pH of 20 called:', categorizeAcidity(20));
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return ' "Goodnight everybody!" ';
  }
}
console.log('yakko says:', introduceWarnerBro('yakko'));
console.log('dot says:', introduceWarnerBro('dot'));
console.log('anyone else says:', introduceWarnerBro('anyone'));
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Any Super Hero Movie';
    case 'comedy':
      return 'Ali Wong Comedy Special';
    case 'horror':
      return 'Jennifers Body';
    case 'drama':
      return 'Carol';
    case 'musical':
      return 'Wicked';
    case 'sci-fi':
      return 'Star Wars';
    default:
      return ' Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi ';
  }
}
console.log('I like musicals, what do you rec?:', recommendMovie('musical'));
console.log('I like comedy, what do you rec?:', recommendMovie('comedy'));
console.log('I like action, what do you rec?:', recommendMovie('action'));
