# typescript-objects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are objects used for?
  Objects are used for organizing data, reducing redundancy, encapsulation, prototypal inheritance, and can be used with built-in objects.

- What are object properties?
  Object properties are either mandatory or optional and define the shape of an object (or what data you are or must collect.) They are

- Describe object literal notation.
  When declaring your object you put curly brackets around it, ex:

  const player = {
  firstName: 'Aaron',
  lastName: 'Judge',
  };

- How do you remove a property from an object?
  You can remove a property by using the delete operator with dot or bracket notation:

delete player.position;
// OR
delete player['position'];

- What are the two ways to get or update the value of a property?
  You can update or add the value of a property using dot notation and bracket notation.
  ex of adding/ updating with dot notation:

player.position = 'Center Field';
console.log('this player plays', player.position);

ex of adding / updating using bracket notation:

player['team'] = 'Yankees';
console.log('the team that the player plays for is', player['team']);

- What is the purpose of interfaces in TypeScript?
  Interfaces define the shape of an object, or have all of the mandatory and optional properties needed/ being collected.

- What are two different ways to describe the shape of an object in TypeScript?
  You can describe the shape of an object with interfaces keyword or type keyword.

- How do optional properties in a TypeScript interface differ from mandatory properties, and why are they useful?

Optional properties end with a question mark before the colon and can hold relevant information that is not mandatory. You cannot create an interface correctly without filling in the mandatory properties.

ex:
interface Player {
firstName: string;
lastName: string;
position?: string;
team?: string;
}

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
