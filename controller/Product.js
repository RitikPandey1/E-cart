const Product = require("../model/productModel");

const { GridFSBucket, ObjectId } = require("mongodb");
const fs = require("fs");
const mongoDB = require("../server");
const multer = require("multer");

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

exports.uploadData = upload.single("photo");

exports.getProducts = async (req, res, next) => {
  const products = await Product.find({ category: req.params.category });

  res.status(200).json({
    status: "success",
    data: products,
  });
};

exports.getProductImg = async (req, res, next) => {
  
  const bucket_read = new GridFSBucket(mongoDB.db);
  mongoDB.db
    .collection("fs.files")
    .findOne(
      {
        $and: [
          { "metadata.productId": new ObjectId(req.params.id) },
          { "metadata.image": req.params.image },
        ],
      },
      (err, result) => {
        if(result) bucket_read.openDownloadStream(result._id).pipe(res);
      }
    );
};
//5f8c658c9e03333248cc60da

exports.addProductImg = async (req, res, next) => {
  const { image, name, _id  } = req.newProduct;
  console.log(req.newProduct);
  const bucket = new GridFSBucket(mongoDB.db);

  fs.createReadStream(`img_cache/${image}`)
    .pipe(
      bucket.openUploadStream(`${name}`, {
        metadata: {
          productId: _id,
        },
      })
    )
    .on("finish", () => {
      res.status(200).json({
        status: "success",
        data: req.newProduct,
      });
    });
};

exports.addProductDetails = async (req, res, next) => {
  console.log(req.file);
  const newProduct = await Product.create({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    image: req.file.filename,
  });

  req.newProduct = newProduct;
  next();
};
