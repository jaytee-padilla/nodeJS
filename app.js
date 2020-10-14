const http = require('http');
const express = require('express');

// stores express framework features in the 'app' variable
const app = express();

// req.body parser
app.use(express.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);