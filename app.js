const http = require('http');
const express = require('express');

// stores express framework features in the 'app' variable
const app = express();

// parses url
// express.urlencoded() is a method built into express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware
app.use(express.urlencoded({extended: true}));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);