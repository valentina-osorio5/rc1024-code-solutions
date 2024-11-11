const $tabContainer = document?.querySelector('.tab-container');
const $tabs = document?.querySelectorAll('.tab');
const $views = document?.querySelectorAll('.view');

console.log($tabs.length);
console.log($tabContainer);

function handleClick(event: Event): void {
  const $eventTarget = event.target as HTMLDivElement;

  if ($eventTarget.matches('.tab')) {
  for (let i = 0;
  i < $tabs.length;
  i++;){
if ($tabs[i]===$eventTarget){
  $eventTarget.className = 'tab active';
}
else {
  $tabs[i].className = 'tab';
}
  }
}
}

$tabContainer.addEventListener('click', handleClick);

function handleBlur(event: any): void {
  console.log('blur event fired');
  const eventTarget = event.target;
  const closestElement = eventTarget.closest('.tab');
  closestElement.className = 'tab';
}

$tabContainer.addEventListener('blur', handleBlur);
