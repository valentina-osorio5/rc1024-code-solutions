'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const newPrices = prices.map((x) => ({ price: x, salesPrice: x / 2 }));
console.log('newPrices', newPrices);
const formattedPrices = prices.map((x) => `$${x}`);
console.log('formattedPrices', formattedPrices);
