var Customer = require('../models/Customer.server.model');
var config = require('../../config');
var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())
var jwt = require('jsonwebtoken');

module.exports={
	getform:function(req, res) {
		res.render('./views/customer/signup.ejs');
		},

	createCustomer:function(req,res){
     Customer.findOne({email:req.body.InputEmail1},function(err,customer)

 	{
 		if(customer){
          console.log('customer id: '+customer._id);
 			res.json({ 
	        	success: false, 
	        	message: 'Customer exits.' 
	      	});
 		}
 		else
 		{
 var customer1 = new Customer(); // create a new instance of the User model
 customer1.firstName = req.body.firstname; // set the users name (comes from the request)
 customer1.lastName = req.body.lastname; // set the users username (comes from the request)
 customer1.password = req.body.InputPassword; // set the users password (comes  from the request)
 customer1.email=req.body.InputEmail1;
 customer1.mobileno=req.body.InputMobile;
 customer1.gender=req.body.sell;
 

 customer1.save(function(err,customer) {
 if (err) res.send(err);
 console.log(customer);
 var token = jwt.sign({ _id: customer._id }, config.secret, { expiresIn: "60 days" });
  res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });

 // return a message
 res.json({ message: 'User created!' });

 });
 		}
 	});
	
},
findAllCustomers:function(req,res)
{

	Customer.find({},function(err,customers)
		{
			res.json({customers});
		});
}


}


 




