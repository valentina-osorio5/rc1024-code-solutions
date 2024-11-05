'use strict';
let totalClicks = 0;
const $hotbutton = document.querySelector('.hot-button');
if (!$hotbutton) throw new Error('The $hotbutton query failed');
const $clickcount = document.querySelector('.click-count');
function handleClick(event) {
  totalClicks++;
  if (!$hotbutton || !$clickcount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  $clickcount.textContent = 'Clicks: ' + totalClicks;
  if (totalClicks < 4) {
    $hotbutton.className = 'hot-button cold';
  } else if (totalClicks < 7) {
    $hotbutton.className = 'hot-button cool';
  } else if (totalClicks < 10) {
    $hotbutton.className = 'hot-button tepid';
  } else if (totalClicks < 13) {
    $hotbutton.className = 'hot-button warm';
  } else if (totalClicks < 16) {
    $hotbutton.className = 'hot-button hot';
  } else {
    $hotbutton.className = 'hot-button nuclear';
  }
}
$hotbutton.addEventListener('click', handleClick);
