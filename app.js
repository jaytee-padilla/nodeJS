const http = require('http');
const express = require('express');

// routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// stores express framework features in the 'app' variable
const app = express();

// parses url
// express.urlencoded() is a method built into express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware
app.use(express.urlencoded({extended: true}));

// the order of the routes matter
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// if none of the other routes above are found/executed, this middleware will run
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => {
  console.log('\nServer is listening at port 3000\n');
});