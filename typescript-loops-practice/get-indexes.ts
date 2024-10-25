/* exported getIndexes */
function getIndexes(array: any[]): any[] {
  const newArray = [];
  for (let i = 0; i < array.length; ++i) {
    const newNumber = i;
    newArray.push(newNumber);
  }
  return newArray;
}
