interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Valentina ',
  lastName: 'Osorio',
  age: 30,
};

console.log('Student:', student);

const fullName: string = student.firstName + student.lastName;
console.log('fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Marketing and Communications Consultant';
console.log('livesInIrvine:', student.livesInIrvine);
console.log('previousOccupation', student.previousOccupation);

console.log('Updated Student Info:', student);
console.log('tyepof Student:', typeof student);

const vehicle: Vehicle = {
  make: 'Chevy',
  model: 'Malibu',
  year: 2010,
};

vehicle['color'] = 'Silver';
vehicle['isConvertible'] = false;

console.log('Vehicle color:', vehicle['color']);
console.log('Is it a Convertible?', vehicle['isConvertible']);
console.log('Vehicle Info:', vehicle);
console.log('typeof Vehicle:', typeof vehicle);

const pet: Pet = {
  name: 'Trouble',
  kind: 'Boston Terrier',
};

console.log('pet:', pet);

delete pet.name;
delete pet.kind;

console.log('New pet object', pet);
console.log('typeof pet:', typeof pet);
