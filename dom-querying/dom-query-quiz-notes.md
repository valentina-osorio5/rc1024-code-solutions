# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To make sure things are working as expected/ to see something show up on our dev tools console.

- What is a "model"?
  A way of doing things.

- Which "document" is being referred to in the phrase Document Object Model?
  HTML document

- What is the word "object" referring to in the phrase Document Object Model?
  A part of the html page becomes an object in the DOM.

- What is a DOM Tree?
  The HTML element is the tree like structure of html elements. The html element is the root node, the head and body elements are children of the root node and then each of their elements (inside <body> or <head>) are their child nodes.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  getElementByClassName(className)
  querySelector(selector)

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  getElementsByClassName(className)
  getElementsByTagName(tagName)

- Why might you want to assign the return value of a DOM query to a variable?
  Querying the DOM takes a really long time so by assigning a DOM query to a variable, accessing the element again does not require another lengthy DOM search/ query.

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir();

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  ? Not sure but maybe: The browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.

- What does `document.querySelector()` take as its argument and what does it return?
  It takes a css selector and returns the FIRST element that matches.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  Takes a css selector but returns all elements that match via a NodeList.

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
