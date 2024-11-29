# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  static positioning

- How does setting `position: relative` on an element affect document flow?
  This can make items overlap others and make them hard to read, but the page scrolls as normal.

- How does setting `position: relative` on an element affect where it appears on the page?
  You have to put values in for how it's moving but once it's been "pushed" top, bottom, left or right it can overlap other items on the page, and it moves according to its original position and the values you fill in.

- How does setting `position: absolute` on an element affect document flow?
  The gap where the element was originally gets filled by other elements. It no longer exists in the normal document flow, it sits on its own layer separate from everything else.

- How does setting `position: absolute` on an element affect where it appears on the page?
  It appears above everything else, helpful for pop ups and other alerts on web pages (like checking for cookies, coupon-codes, asking for email sign ups, etc.)

- How do you constrain an absolutely positioned element to a containing block?

- What are the four box offset properties?

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
