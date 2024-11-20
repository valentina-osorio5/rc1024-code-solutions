'use strict';
let currentIndex = 0;
const $characters = document.querySelectorAll('span');
let $currentCharacter = $characters[currentIndex];
document.addEventListener('keydown', (event) => {
  if (currentIndex === $characters.length) {
    return;
  }
  if (event.key === $currentCharacter.textContent) {
    $currentCharacter.className = 'correct';
    currentIndex++;
    $currentCharacter = $characters[currentIndex];
    $currentCharacter.className = 'current';
  } else {
    $currentCharacter.className = 'current incorrect';
  }
});
