// shop controller

// models
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  // using a callback function to fetch all products to fix async-related issues
  // *** will more than likely change this functionality to use promises in near future ***
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      products: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      products: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: 'checkout',
    pageTitle: 'Checkout'
  });
};
