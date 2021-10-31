const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const cors = require("cors");
const port = 3001;
const bodyParser = require("body-parser");
const productController = require("./controller/productController");
const userController = require("./controller/userController");
const cartController = require("./controller/cartController");

//some setting
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//multer
const myDestination = path.join(__dirname, "./public/img/products");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, myDestination);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

app.get("/api/stationaries", productController.getProductsStationary);
app.get("/api/product", productController.getProduct);
app.get("/api/product/:id", productController.getSingleProduct);
app.post(
  "/api/product/add",
  upload.single("image"),
  productController.addProduct
);
app.post(
  "/api/product/edit/:id",
  upload.single("image"),
  productController.editProduct
);
app.delete("/api/delete/:id", productController.deleteProduct);
app.post("/api/register", userController.register);
app.post("/api/login", userController.logIn);
app.get("/api/authorize", userController.authorize);
app.post("/api/google/login", userController.googleLogInHandler);
app.post("/api/cart", cartController.addCart);
app.get("/api/cart/:id", cartController.getCart);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
