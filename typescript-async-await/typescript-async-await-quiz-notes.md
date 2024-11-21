# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  They are used for writing/dealing with asynchronous code/functions in an easy way.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Async and Await is read sequentially, and is usually easier to write and follow.

Async and Await have to be within a function with the following syntax:

async function foo() {
try {
const data = await doAsyncWork(params);
// `data` is the Promise's `resolve` value.
const result = handleSuccess(data);
return result; // JS wraps `result` in a Promise
} catch (error) {
// `error` is the Promise's `reject` value.
handleError(error);
}
}

- When do you use `async`?
  When writing an asynchronous function, before the word function in a function definition

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  Await tells you to wait for the asynchronous promise to resolve or reject.

- How do you handle errors with `await`?
  Inside catch line of the try-catch block tells you how to handle both the resolved and rejected cases.

- What do `try`, `catch` and `throw` do? When do you use them?
  Try is at the beginning of the sync and await function, it's what you do first, and has the instructions for what to do if the function resolves.

The catch line in the code block tells you what to do if the promise rejects, and it throws an error if needed.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  If you forget to use await on a promise, it won't wait for the callback function to execute... not sure what would happen, the code probably wouldn't fun as expected.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  I like callbacks because they're familiar but also like the async/await style because they don't seem so difficult to understand/ use.

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
