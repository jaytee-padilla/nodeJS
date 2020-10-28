// admin controller

// models
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
		path: '/admin/add-product',
		editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(null, title, imageURL, price, description);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
	const productId = req.params.productId;

	Product.findById(productId, product => {
		if (!product) {
			return res.redirect('/');
		}

		res.render('admin/edit-product', {
			pageTitle: 'Edit Product',
			path: '/admin/edit-product',
			product: product
		});
	});
};

exports.postEditProduct = (req, res, next) => {
	const productId = req.body.productId;
	const updatedTitle = req.body.title;
	const updatedImageURL = req.body.imageURL;
	const updatedPrice = req.body.price;
	const updatedDescription = req.body.description;
	const updatedProduct = new Product(
		productId,
		updatedTitle,
		updatedImageURL,
		updatedPrice,
		updatedDescription,
	);

	updatedProduct.save();
	res.redirect('/admin/admin-product-list');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/admin-product-list', {
      products: products,
      pageTitle: 'Admin Products',
      path: '/admin/admin-product-list',
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
	const productId = req.body.productId;
	Product.deleteById(productId);
	res.redirect('/admin/admin-product-list');
};