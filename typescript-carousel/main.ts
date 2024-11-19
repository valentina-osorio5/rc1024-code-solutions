const $carouselImages = document.querySelectorAll('.carousel-image');
const $progressDots = document.querySelectorAll('.carousel-progress > i');

let timerId: NodeJS.Timeout;
let currentIndex = 0;

function showIndex(targetIndex: number): void {
  // Loop through all carousel images
  for (let i = 0; i < $carouselImages.length; i++) {
    // Check if the current image index matches the target index
    if (i === targetIndex) {
      // Make the target image visible
      $carouselImages[i].className = 'carousel-image';
      // Update the progress dot to the active state
      $progressDots[i].className = 'fas fa-circle';
    } else {
      // Hide images that are not at the target index
      $carouselImages[i].className = 'carousel-image hidden';
      // Update the progress dots to the inactive state
      $progressDots[i].className = 'far fa-circle';
    }
  }
  // Update the current index to the target index
  currentIndex = targetIndex;

  // Restart the autoplay timer after updating the carousel
  autoPlay();
}

/**
 * Function to start or restart the autoplay timer
 */
function autoPlay(): void {
  // Clear the existing timer to prevent overlap
  clearTimeout(timerId);

  // Set a new timer to display the next image after 3 seconds
  timerId = setTimeout(function () {
    // Show the next image in the carousel
    showIndex(getNextIndex());
  }, 3000);
}

function getNextIndex(): number {
  // Check if the current image is the last one
  if (currentIndex === $carouselImages.length - 1) {
    // If so, return to the first image
    return 0;
  } else {
    // Otherwise, move to the next image
    return currentIndex + 1;
  }
}

/**
 * Function to calculate the index of the previous image
 * @returns The index of the previous image
 */
function getPreviousIndex(): number {
  // Check if the current image is the first one
  if (currentIndex === 0) {
    // If so, move to the last image
    return $carouselImages.length - 1;
  } else {
    // Otherwise, move to the previous image
    return currentIndex - 1;
  }
}

/**
 * Function to handle click events on the carousel
 * @param event - The click event object
 */
function handleClick(event: Event): void {
  // Get the element that triggered the event
  const $eventTarget = event.target as HTMLElement;

  // Check if the "previous" button was clicked
  if ($eventTarget.matches('.previous')) {
    // Show the previous image
    showIndex(getPreviousIndex());
    return;
  }

  // Check if the "next" button was clicked
  if ($eventTarget.matches('.next')) {
    // Show the next image
    showIndex(getNextIndex());
    return;
  }

  // Ignore clicks on elements that are not progress dots
  if (!$eventTarget.matches('.fa-circle')) {
    return;
  }

  // Loop through all progress dots to find the clicked one
  for (let i = 0; i < $progressDots.length; i++) {
    // Check if the current dot matches the event target
    if ($eventTarget === $progressDots[i]) {
      // Show the image corresponding to the clicked dot
      showIndex(i);
      break;
    }
  }
}

// Select the carousel container element from the DOM
const $carouselContainer = document.querySelector('.carousel-container');

// Check if the carousel container exists
if (!$carouselContainer) {
  // Throw an error if the carousel container is not found
  throw new Error('$carouselContainer is null');
}

// Add a click event listener to the carousel container
$carouselContainer.addEventListener('click', handleClick);

// Start the autoplay functionality when the script runs
autoPlay();
