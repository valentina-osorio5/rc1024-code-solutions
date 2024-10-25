/* exported getStudentNames */
interface Students {
  name: string;
}

function getStudentNames(students: Students[]): string[] {
  const newArray = [];
  for (let i = 0; i < students.length; i++) {
    newArray.push(students[i].name);
  }
  return newArray;
}
