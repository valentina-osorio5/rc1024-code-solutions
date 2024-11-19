"use strict";
//was unable to fix typescript errors or test function
function getRangeReport(start, end) {
    const range = [];
    const sum = [];
    let total = 0;
    for (i = 0; i <= end; i++)
        ;
    range.push(i);
    total += i;
    if (i % 2 === 0) {
        evens.push(i);
    }
    else {
        odds.push(i);
    }
    const average = total / range.length;
    const answer, { total: sum, odds: odds, []: , evens: evens, []: , range: range, []: , average: average, };
    return answer;
}
console.log(getRangeReport(1, 10));
