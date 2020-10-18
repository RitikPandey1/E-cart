const Product = require('../model/productModel');

exports.getProduct = async (req,res,next) => {
  
    const products = await Product.find({ category: req.params.category });
    res.status('200').json({
        status: "success",
        length: products.length,
        data: products
    });
};

exports.addProduct = async (req, res, next) => {
   const newProduct =  await Product.create({
        name: req.body.name,
        price: req.body.price,
       category: req.body.category,
    });
 
    res.status('200').json({ newProduct });

}