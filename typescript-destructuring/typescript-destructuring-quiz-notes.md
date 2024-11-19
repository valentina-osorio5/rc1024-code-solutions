# typescript-destructuring-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is destructuring, conceptually?
- Labeling variables from object or array elements in an easier way. 

- What is the syntax for `Object` destructuring?

const person: Person = { firstName: 'John', lastName: 'Doe' };
- const { firstName, lastName } = person;
console.log(firstName, lastName);
The variable names have to match the object properties (unless you create aliases).

- What is the syntax for `Array` destructuring?

const numbers: number[] = [70, 80, 90];
const [x, y, z] = numbers;
console.log(x, y, z); // Outputs: 70, 80, 90

You but the variable at the index of the array it is meant to represent. 

- How can you tell the difference between destructuring and creating `Object`/`Array` literals?

In destructuring, the variable is to the right of the = operator. 

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
