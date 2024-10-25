/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const newArray = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}
