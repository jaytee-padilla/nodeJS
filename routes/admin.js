// this route handles the creation of products (admin access)

const express = require('express');

// basically an object that stores the routes for the app
const router = express.Router();

// controllers
const productsController = require('../controllers/products');

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;