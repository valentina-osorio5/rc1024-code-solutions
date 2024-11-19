//was unable to fix typescript errors or test function

interface Range {
  total: number;
  odds: Odds[];
  evens: Evens[];
  range: Range[];
  average: number;
}

function getRangeReport(start: number, end: number): Range{
const range: number[]=[];
const sum: number[]=[]
let total = 0;
for (i=0; i <= end; i++);
range.push(i);
total += i;
if (i % 2 === 0){
evens.push(i);
} else {
  odds.push(i);
}
const average = total/ range.length;
const answer: Range{
    total: sum
    odds: odds [],
    evens: evens[],
    range: range[],
    average: average,
  };
  return answer;
}


console.log(getRangeReport(1, 10));
