const express = require('express');

const router = express.Router();
// controllers
const productsController = require('../controllers/products');

router.get('/', productsController.getProducts);

module.exports = router;