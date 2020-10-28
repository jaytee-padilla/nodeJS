// product model

const fs = require('fs');
const path = require('path');

// get path to products.json file inside data folder
const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}

	});
};

module.exports = class Product {
	constructor(id, title, imageURL, price, description) {
		this.id = id,
		this.title = title,
		this.imageURL = imageURL,
		this.price = price,
		this.description = description
	}

	save() {
		getProductsFromFile((products) => {
			// if id exists, update the product
			if (this.id) {
				const existingProductIndex = products.findIndex(product => product.id === this.id);
				const updatedProducts = [...products];
				updatedProducts[existingProductIndex] = this;

				fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
					console.log(err);
				});
			} else {
				// if id does not exist, create new product
				this.id = Math.random().toString(); // dummy value, will implement id generating package

				// 'this' will refer to the object created by this class
				products.push(this);

				fs.writeFile(p, JSON.stringify(products), (err) => {
					console.log(err);
				});
			}
		});
	}

	// 'static' is built into javascript
	// it allows the fetchAll() method to be directly called on the 'Product' class itself and NOT on an instantiated object
	static fetchAll(cb) {
		getProductsFromFile(cb);
	}

	static findById(id, cb) {
		getProductsFromFile(products => {
			const product = products.find(p => p.id === id);
			cb(product);
		});
	}
};