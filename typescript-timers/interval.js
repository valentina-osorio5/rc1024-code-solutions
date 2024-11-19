"use strict";
const $text = document.querySelector('.countdown-display');
let count = 4;
const intervalId = setInterval(() => {
    count--;
    $text.textContent = count;
    if (count <= 1) {
        clearInterval(intervalId);
        $text.textContent = '~Earth Beeeelooowww Us~';
    }
}, 1000);
