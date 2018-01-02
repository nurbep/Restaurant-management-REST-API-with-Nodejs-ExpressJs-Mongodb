var express = require('express');
var router = express.Router();
var orderController = require("../controllers/Order.server.controller");

// route to send an order
router.post('/sendOrder',orderController.sendOrder);

module.exports = router;

