const path = require('path');
const express = require('express');

// routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// stores express framework features in the 'app' variable
const app = express();

// parses url
// express.urlencoded() is a method built into express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware
app.use(express.urlencoded({extended: true}));

// the order of the routes matter
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// if none of the other routes above are found/executed, this middleware will run
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
  console.log('\nServer is listening at port 3000\n');
});