/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const newArray = [];
  for (const string of words) {
    const newString = string + suffix;
    newArray.push(newString);
  }
  return newArray;
}
