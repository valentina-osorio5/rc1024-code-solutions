'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArray = [];
  for (const string of words) {
    const newString = string + suffix;
    newArray.push(newString);
  }
  return newArray;
}
