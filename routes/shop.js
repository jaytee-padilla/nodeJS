const path = require('path');
const express = require('express');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  // __dirname holds the absolute path on the computer's operating system to this project's folder
  // the .join() builds the filepath and it works for multiple Operating Systems
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});

module.exports = router;