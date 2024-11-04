const $clickbutton = document.querySelector('.click-button');

if (!$clickbutton) throw new Error('$clickbutton does not exist');

function handleClick(event: Event): void {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}
$clickbutton.addEventListener('click', handleClick);

const $hoverbutton = document.querySelector('.hover-button');
if (!$hoverbutton) throw new Error('$hoverbutton does not exist');

function handleMouseover(event: Event): void {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}

$hoverbutton.addEventListener('mouseover', handleMouseover);

const $doubleclick = document.querySelector('.double-click-button');
if (!$doubleclick) throw new Error('$doubleclick does not exist');

function handleDoubleClick(event: Event): void {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

$doubleclick.addEventListener('dblclick', handleDoubleClick);
