/* exported countdown */
function countdown(num: number): number[] {
  const newArray = [];
  for (let i = num; i >= 0; i--) {
    newArray.push(i);
  }
  return newArray;
}
