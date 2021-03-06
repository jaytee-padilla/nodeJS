// this route handles the creation of products (admin access)

const express = require('express');

// basically an object that stores the routes for the app
const router = express.Router();

// controllers
const adminController = require('../controllers/admin');

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// /admin/admin-product-list => GET
router.get('/admin-product-list', adminController.getProducts);

// /admin/edit-product => GET
router.get('/edit-product/:productId', adminController.getEditProduct);

// /admin/edit-product => POST
router.post('/edit-product/', adminController.postEditProduct);

// /admin/delete-product => POST
router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;