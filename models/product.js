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
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      // 'this' will refer to the object created by this class
      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // 'static' is built into javscript
  // it allows the fetchAll() method to be directly called on the 'Product' class itself and NOT on an instantiated object
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};