"use strict";
console.log('Hello');
setTimeout(function () {
    console.log('World!');
}, 2000);
const $text = document.querySelector('.message');
setTimeout(sayHello, 2000);
function sayHello() {
    $text.textContent = "Hello There";
}
