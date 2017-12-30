var Order = require('../models/Order.server.model');
var Product = require('../models/Product.server.model');
var Customer = require('../models/Customer.server.model');
var config = require('../../config');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var express = require('express');
var app=express();
app.use(session({secret: 'ssshhhhh'}));
module.exports={
	sendOrder:function(req,res){
      
     Product.find({},function(err,prod){
      Customer.findOne({email:req.session.email},function(err,customer){
        var order=new Order({
            orderedBy:customer,

            products:[{
                  numberOfItems:17,
                  selectedProduct:req.body.product
            }]//ends products
            
            
          });//finish Order
        order.save(function(err, order){

        } );// ends order.save method

        });//ends Customer.findOne method

     });//ends Product.findOne method
     
         
     }// ends sendOrder method

     

}

