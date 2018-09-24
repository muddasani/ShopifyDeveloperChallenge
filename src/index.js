const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

const shopRoutes = require("./routes/Shop");
const productRoutes = require("./routes/Product");
const productLIRoutes = require("./routes/ProductLI");
const orderRoutes = require("./routes/Order");

mongoose.connect("mongodb://shopify:shopify123@ds043991.mlab.com:43991/shopify", { useNewUrlParser: true });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/shop", shopRoutes);
app.use("/product", productRoutes);
app.use("/productLI", productLIRoutes);
app.use("/order", orderRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

const port = "3000";
app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => `Running on port ${port}`);