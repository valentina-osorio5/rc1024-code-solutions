# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  Because we want to make sure things are working as expected.

- What is the purpose of events and event handling?
  To see what actions were taken on your page/ buttons.

- Are all possible parameters required to use a JavaScript method or function?
  No

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
- AddEventListener

- What is a callback function?
- A function that is passed in as an argument into another function. 

- What object is passed into an event listener callback when the event fires?
- The event object is passed in. 

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
- Where the event took place. 

- What is the difference between these two snippets of code?

The first is a call back function.

The second calls your function without any event happening. 

```js
element.addEventListener('click', handleClick);
```

```js
element.addEventListener('click', handleClick());
```

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
