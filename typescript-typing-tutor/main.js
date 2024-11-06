const $allSpans = document?.querySelectorAll('span');
let currentSpanIndex = 0;
let currentSpan = 0;
console.log($allSpans[0]);
console.log($allSpans.length);

function whatKey(event) {
  // let currentSpanIndex = 0
  let i=0; i > $allSpans.length; i++

  if (evt.keyCode === $allSpans[currentSpanIndex]) {
    currentSpan.className = 'current correct';
  } else if {
    currentSpan.className = 'current incorrect';
  }
  currentSpanIndex++
  currentSpan.className= 'current';
}

document.addEventListener.('keydown', whatKey);



// Get the current character based on the currentIndex, starting with the first character

// Add an event listener to the document to listen for 'keydown' events (i.e., when a key is pressed)

// If the currentIndex has reached the end of the characters,
// stop the function

// Check if the pressed key matches the current character's text content

// If it matches, set the class of the current character to 'correct' for styling

// Move to the next character by incrementing the currentIndex

// Update $currentCharacter to point to the next character in the sequence

// Set the class of the new current character to 'current' for visual indication

// Else - the key pressed does not match
//  apply 'current incorrect' to indicate an error
