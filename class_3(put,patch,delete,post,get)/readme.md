
## Express
Express is just a wrapper around nodejs's http module. internally it uses http only to create a server. but express gives you so many things out of the box, to create a server very easily.

## App
every call to express creates a app for you. app is nothing but a server.

const express = require('express');
const app = express(); // server

## Methods and Routing
every app instance has every standard HTTP verbs on it. these method accept 2 arguments: first is route, of type string. second is the generic callback that we used with http:

(req, res) => {}
so you can create routing like this:

app.get("/", (req, res) => {
  //  handle request
});

app.post("/new", (req, res) => {
  //
});


## Routing in depth
The first argument route is not just a simple string. express can interprete this string in multiple ways.

eg: this path will match with any request on /abcd, /abbcd, /abbbbbcd etc. (because + operator means one or more than one occurance of the character);

## get request handle
app.get('/ab+cd', (req, res) => {
  res.send('ab+cd')
})
or similarly: the following route will match any of the following routes: /abxcd /abANYTHINGcd or /ab1234cd because * represents anything

app.get('/ab*cd', (req, res) => {
  res.send('ab*cd')
})
You can also provide dynamic routes, a route that matches with any part.

app.get('/product/:id', (req, res) => {
  console.log("Product ID is", req.params.id)
})
when you create a route with :xyz express will run that handler when there's a request that matches with that part: /product/1 or /product/hello or /product/abcdnef1234 etc. And if you have guessed, in the handler, the req.params holds the parameters. it will be an object with the variable name in route (':id' here) and its matched value.

{id: 1}
another example: Route: /users/:userId/books/:bookId

Request: http://localhost:3000/users/34/books/8989

so inside route handler, req.params will be

{ "userId": "34", "bookId": "8989" }