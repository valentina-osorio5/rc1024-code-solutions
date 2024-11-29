# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  Where on a web page a user is clicking their mouse.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Event delegation.

- What DOM element property tells you what type of element it is?
  DOM Element Object

- What does the `element.closest()` method take as its argument and what does it return?
  Takes a css selector as its property and returns the closest ancestor element or itself that matches the selectors. If nothing, it will return null.

- How can you remove an element from the DOM?
  Using the remove() method.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  Add the event listener to the parent element, and the event listener will listen for events throughout its children.

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
