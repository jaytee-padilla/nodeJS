// this route handles the creation of products (admin access)

const express = require('express');

// basically an object that stores the routes for the app
const router = express.Router();

// controllers
const adminController = require('../controllers/admin');

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/admin-product-list
router.get('/admin-product-list', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);



module.exports = router;