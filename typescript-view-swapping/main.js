'use strict';
// Selects the tab container element from the DOM and stores it in $tabContainer
const $tabContainer = document.querySelector('.tab-container');
// Selects all elements with the class 'tab' and stores them in the $tabs NodeList
const $tabs = document.querySelectorAll('.tab');
// Selects all elements with the class 'view' and stores them in the $views NodeList
const $views = document.querySelectorAll('.view');
// Throws an error if the tab container element is not found in the DOM
if (!$tabContainer) throw new Error('$tabContainer query failed');
// Adds an event listener for click events on the $tabContainer
$tabContainer.addEventListener('click', (event) => {
  // Casts the event target to an HTMLDivElement and stores it in $eventTarget
  const $eventTarget = event.target;
  // Checks if the clicked element has the class 'tab'; if not, exit the function
  if (!$eventTarget.matches('.tab')) {
    return;
  }
  // Loops through each tab element to update their classes based on the clicked tab
  for (let tabIndex = 0; tabIndex < $tabs.length; tabIndex++) {
    // If the current tab is the clicked tab, add the 'active' class
    if ($tabs[tabIndex] === $eventTarget) {
      $tabs[tabIndex].className = 'tab active';
    } else {
      // Otherwise, remove the 'active' class from other tabs
      $tabs[tabIndex].className = 'tab';
    }
  }
  // Retrieves the value of the 'data-view' attribute from the clicked tab
  const viewName = $eventTarget.dataset.view;
  // Loops through each view element to show/hide them based on the clicked tab's view name
  for (let viewIndex = 0; viewIndex < $views.length; viewIndex++) {
    // If the view's 'data-view' attribute does not match the clicked tab's view, hide it
    if ($views[viewIndex].getAttribute('data-view') !== viewName) {
      $views[viewIndex].className = 'view hidden';
    } else {
      // Otherwise, show the view that matches the clicked tab's view
      $views[viewIndex].className = 'view';
    }
  }
});
