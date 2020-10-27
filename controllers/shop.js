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

exports.getProduct = (req, res, next) => {
	const productId = req.params.productId;

	Product.findById(productId, product => {
		res.render('shop/product-detail', {
			product: product,
			pageTitle: product.title,
			path:'/products'
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

exports.postCart = (req, res, next) => {
	const productId = req.body.productId;
	console.log(productId);
	res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
