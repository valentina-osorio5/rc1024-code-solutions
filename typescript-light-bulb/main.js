const $lightbulb = document.querySelector('.lightbulb');
const $outerDiv = document.querySelector('.outerDiv');
if (!$lightbulb) throw new Error('The $lightbulb query failed');
if (!$outerDiv) throw new Error('The $outerDiv query failed');
let totalClicks = 0;

function handleClick() {
  totalClicks++;
  if (!$lightbulb) {
    throw new Error('The $lightbulb query failed');
  }
  if (!$outerDiv) {
    throw new Error('The $outerDiv query failed');
  }
  if (totalClicks % 2 === 0) {
    $lightbulb.className = 'lightbulb off';
    $outerDiv.className = 'outerDiv black';
  } else {
    $lightbulb.className = 'lightbulb on';
    $outerDiv.className = 'outerDiv white';
  }
}

$lightbulb.addEventListener('click', handleClick);
