const Product = require("../model/productModel");

const { GridFSBucket, ObjectId } = require("mongodb");
const fs = require("fs");
const mongoDB = require("../server");
const multer = require("multer");

// multer disk storage config 
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./img_cache");
  },
  filename: function (req, file, cb) {
    const [name, extenstion] = file.originalname.split(".");
    cb(null, name + "-" + Date.now() + "." + extenstion);
  },
});

const upload = multer({ storage: storage });

exports.uploadData = upload.array("photo",4);

// get data of all products
exports.getProducts = async (req, res, next) => {
  const products = await Product.find({ category: req.params.category });

  res.status(200).json({
    status: "Success",
    data: products,
  });
};

// get specific image of any product
exports.getProductImg = async (req, res, next) => {
  const { id, image } = req.params;
  const bucket_read = new GridFSBucket(mongoDB.db);
  mongoDB.db
    .collection("fs.files")
    .findOne(
      {
        $and: [
          { "metadata.productId": new ObjectId(id) },
          { "metadata.link": image },
        ],
      },
      (err, result) => {
        //  connecting gridfs readable stream to res write stream 
        result ? bucket_read.openDownloadStream(result._id).pipe(res) : res.status(404).json({ message: "image not found" });
      }
    );
};

// uploading products image in db
exports.addProductImg = async (req, res, next) => {
  const { images, name, _id  } = req.newProduct;

  const bucket = new GridFSBucket(mongoDB.db);

  images.forEach(img => {
    //connecting readstream to gridfs write stream 
  fs.createReadStream(`img_cache/${img}`).pipe(
    bucket.openUploadStream(`${name}`, {
      metadata: {
        productId: _id,
        link: img,
      },
    })
  );  
  });
  
 res.status(200).json({
   status: "Success",
   data: req.newProduct,
 });

};

// adding products detail in db 
exports.addProductDetails = async (req, res, next) => {
   
  const fileNames = req.files.map(el => el.filename);

  const newProduct = await Product.create({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    images: fileNames,
  });

  req.newProduct = newProduct;
  next();
};
