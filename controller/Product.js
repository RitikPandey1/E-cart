const Product = require("../model/productModel");
const AppError = require("../utils/AppError");
const catchError = require("../utils/catchError");
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

exports.uploadData = upload.array("photo", 4);

// get data of all products
exports.getProducts = catchError(async (req, res, next) => {
  
  const products = await Product.find({ category: req.params.category });

  res.status(200).json({
    status: "Success",
    data: products,
  });
});

exports.product = catchError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json({
    status: "Success",
    data: product,
  });
});
// get specific image of any product
exports.getProductImg = (req, res, next) => {
  const { id, image } = req.params;
  const bucket_read = new GridFSBucket(mongoDB.db);
  mongoDB.db.collection("fs.files").findOne(
    {
      $and: [
        { "metadata.productId": new ObjectId(id) },
        { "metadata.link": image },
      ],
    },
    (err, result) => {
      //  connecting gridfs readable stream to res write stream
      if (err) return next(err);
      result
        ? bucket_read.openDownloadStream(result._id).pipe(res)
        : next(new AppError("Fail", "image not found", 404));
    }
  );
};

// uploading products image in db
exports.addProductImg = (req, res, next) => {
  const { images, name, _id } = req.newProduct;

  const bucket = new GridFSBucket(mongoDB.db);

  images.forEach((img) => {
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
exports.addProductDetails = catchError(async (req, res, next) => {
  const { name, price, images, description } = req.body;
  const fileNames = req.files.map((el) => el.filename);

  const newProduct = await Product.create({
    name,
    price,
    category,
    images: fileNames,
    description,
  });

  req.newProduct = newProduct;
  next();
});
