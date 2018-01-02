var express = require('express');
var router = express.Router();
var productController = require("../controllers/Product.server.controller");

//route to add product
router.post('/addProduct',productController.addProduct);

//route to get products
router.get('/products',productController.getProducts);

module.exports = router;
