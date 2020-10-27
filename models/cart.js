const fs = require('fs');
const path = require('path');

// get path to products.json file inside data folder
const p = path.join(path.dirname(require.main.filename), 'data', 'cart.json');

module.exports = class Cart {
	static addProduct(id, productPrice) {
		// Fetch the previous cart
		fs.readFile(p, (err, fileContent) => {
			let cart = {products: [], totalPrice: 0};

			// cart already exists
			if (!err) {
				cart = JSON.parse(fileContent);
			}

			// analyze the cart => Find existing product
			// Add new product or increase quantity of existing product
			const existingProductIndex = cart.products.findIndex(product => product.id === id);
			const existingProduct = cart.products[existingProductIndex];
			let updatedProduct;

			if (existingProduct) {
				updatedProduct = {...existingProduct};
				updatedProduct.quantity = updatedProduct.quantity + 1;
				cart.products = [...cart.products];
				cart.products[existingProductIndex] = updatedProduct;
			} else {
				updatedProduct = {id: id, quantity: 1};
				cart.products = [...cart.products, updatedProduct];
			}

			// update cart's total price
			cart.totalPrice = cart.totalPrice + +productPrice;

			// create the cart data file or overwrite an already existing one
			fs.writeFile(p, JSON.stringify(cart), err => {
				if (err) {
					console.log(err);
				}
			});
		});
	}
}