// this route handles the creation of products (admin access)

const path = require('path');
const express = require('express');

// basically an object that stores the routes for the app
const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect('/');
});

exports.routes = router;
exports.products = products;