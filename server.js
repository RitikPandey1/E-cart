const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const productRouter = require("./routes/productRoute");
const app = express();
dotenv.config({ path: "./config.env" });

(async () => {
      const mongo = await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });
      console.log("-- Database connected --"); 
  exports.db = mongo.connection.db;

 })();


app.use(express.json());


app.use("/api/v1/products/", productRouter);

app.listen(process.env.PORT, () =>
  console.log(`-- server running at PORT: ${process.env.PORT} --`)
);
