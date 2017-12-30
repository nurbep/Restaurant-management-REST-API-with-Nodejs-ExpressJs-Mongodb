var express = require('express');
var router = express.Router();
var authController = require("../controllers/CustomerAuthentication.server.controller");
var customerController=require("../controllers/Customer.server.controller");

// route for register action
router.post('/', customerController.createCustomer);

//route to return all customers
router.get('/customers',customerController.findAllCustomers);

// route to login 
router.post('/login',authController.customerLogin);
