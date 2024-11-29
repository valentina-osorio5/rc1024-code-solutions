const $clickbutton = document.querySelector('.task-list');
if (!$clickbutton) throw new Error('$clickbutton does not exist');

function handleClick(event: Event): any {
  const eventTarget = event.target as HTMLElement;
  console.log('eventTarget: ', eventTarget);
  console.log('event.target.tagName: ', event.target.tagName);

  if (eventTarget.tagName === 'BUTTON') {
    const closestElement = eventTarget.closest('.task-list-item');
    console.log(closestElement);
    closestElement.remove(closestElement);
  }
}

$clickbutton.addEventListener('click', handleClick);
