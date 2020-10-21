// product model

const products = []; // FOR NOW, stores products. Will change this functionality later when implementing actual databases

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    // 'this' will refer to the object created by this class
    products.push(this);
  }

  // 'static' is built into javscript
  // it allows the fetchAll() method to be directly called on the 'Product' class itself and NOT on an instantiated object
  static fetchAll() {
    return products;
  }
};