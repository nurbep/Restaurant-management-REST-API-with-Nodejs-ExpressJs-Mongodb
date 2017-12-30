var Product = require('../models/Product.server.model');
var Customer = require('../models/Customer.server.model');
var Comment = require('../models/Comment.server.model');
var config = require('../../config');
module.exports={
	addProduct:function(req,res){
      var product=new Product({
        name:req.body.name,
        price:req.body.price,
        ingridients:req.body.ingridients,
 });

      product.save(function(err,product)
      	{
      		if(err)
      			res.send(err);
      		res.json({product});
      	});

	},
	getProducts:function(req,res){

      Product.find({},function(err,products)
      	{
      		if(err)
      		res.send(err);
      	res.json({products});
      	});
	},
	getSingleProductWithComments:function(req,res)
	{
  
    Product.aggregate([{$lookup:{from:Comment,localField:_id,foreignField:product,as:'coms'}}],function(err,data){

      console.log("hmm data:"+JSON.stringify(data));
    });
	 	
	}

}

