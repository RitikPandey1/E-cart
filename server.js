const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./utils/DB");
const productRouter = require("./routes/productRoute");
const app = express();
dotenv.config({ path: "./config.env" });

connectDB();

app.use(express.json());

app.use("/api/v1/products/", productRouter);

app.listen(process.env.PORT, () =>
  console.log(`-- server running at PORT: ${process.env.PORT} --`)
);
