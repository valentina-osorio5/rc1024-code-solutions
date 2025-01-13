# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?

The server is not required to implement the HTTP methods according to the CRUD operations.
Create / POST
Read / GET
Update/ PUT
Delete / DELETE

- What is Express middleware?
  Middleware are functions that dictate what happens when a server gets an HTTP request.
  Express middleware is like an array of functions held by the Express process.

- What is Express middleware useful for?
  Execute any code.
  Make changes to the request and the response objects.
  End the request-response cycle.
  Call the next middleware function in the stack.

- How do you mount a middleware with an Express application?
  mounting- calling a special function, like use or get, which adds the function to the middleware array

  By specifying the mount path:

  ex: app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
  })

Middleware with no mount path executes everytime the app receives a request. ex:
app.use((req, res, next) => {
console.log('Time:', Date.now())
next()
})

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  The request object and the response object as well as the next function.

- How do you specify and retrieve route parameters?
  We speciyf the route parameters with a colon and name of the parameter and retrieve it with the params property. 

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
