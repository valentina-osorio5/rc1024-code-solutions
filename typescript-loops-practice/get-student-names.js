'use strict';
function getStudentNames(students) {
  const newArray = [];
  for (let i = 0; i < students.length; i++) {
    newArray.push(students[i].name);
  }
  return newArray;
}
