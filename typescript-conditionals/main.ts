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

function isUnderFive(number: number): boolean {
  return number < 5;
}

function isEven(number: number): boolean {
  return number % 2 === 0;
}

function startsWithJ(string: string): boolean {
  return string[0] === 'J';
}

interface Person {
  name: string;
  age: number;
}

function isOldEnoughToDrink(person: Person): boolean {
  return person.age >= 21;
}

function isOldEnoughToDrive(person: Person): boolean {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(): string {
  return 'false';
}

function categorizeAcidity(pH: number): string {
  if (pH < 7 && ph >= 0) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name: string): string {
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

function recommendMovie(genre: string): string {
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
