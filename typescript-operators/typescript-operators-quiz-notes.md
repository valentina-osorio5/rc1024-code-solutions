# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

the logical && operator evaluates expression2 only if expression1 is truthy, and returns expression 2 if so.

the logical || operator is the opposite and evaluates expression 2 only if expression 1 is falsy, and returns expression 2 if so.

They can be used to assign values to variables and console.log depending on the truthiness or falsiness of variables, etc.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

Short circuit for the || operator means that the second expression is not evaluated if the first expression is truthy. It is evaluated left to right. Hence any side effects of doing so do not take effect (e.g., if expr is a function call, the calling never takes place). This happens because the value of the operator is already determined after the evaluation of the first operand.

Short circuit for the && operator means that if the first expression is falsy, the operator stops. So if expression 2 is a function, it will never be called.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

the ?? operator returns expression 2 only if expression 1 is null or undefined, otherwise it returns expression 1.

It's different in that it will still return expression 1 if it's falsy as long as its value is either null or undefined.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

The ?: operator valuates expression 1 if the condition is true, otherwise evaluates expression 2.

In if else statements, the else statement (depending on the function) could eventually evaluate to true and then loop through the if statement, the ?: operator is more rigid, but can be chained like an if/ else statement.

- What is the `?.` (optional chaining) operator? When would you use it?

The ?. operator returns undefined if obj or property is null or undefined, otherwise it returns the obj.prop. You would use this when trying to access properties of DOM objects that may be null.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

syntax:
const arr = [1, 2, 3];
const newArr = [...arr, 4];

const obj = { id: 1, name: 'Alice' };
const newObj = { ...obj, age: 25 };

The ... operator allows you to copy arrays and objects and add in new properties or elements to the front or the end of the array/object.

- What data types can be spread into an array? Into an object?
  Any data types can be spread into an array, key value pairs must be spread into the object as long as the interfaces allow.

- How does spread syntax differ from rest syntax?

Not sure I understand rest syntax but:

A function definition can only have one rest parameter.
The rest parameter must be the last parameter in the function definition. (which differs from the spread parameter)
Trailing commas are not allowed after the rest parameter.
The rest parameter cannot have a default value.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
