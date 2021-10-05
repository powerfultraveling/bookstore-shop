const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const bodyParser = require("body-parser");
const productController = require("./controller/productController");
const userController = require("./controller/userController");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/api/stationaries", productController.getProductsStationary);

app.get("/api/product", productController.getProduct);
app.get("/api/product/:id", productController.getSingleProduct);
app.post("/api/product", productController.addProduct);

app.delete("/api/delete/:id", productController.deleteProduct);

app.post("/api/register", userController.register);
app.post("/api/login", userController.logIn);
app.get("/api/authorize", userController.authorize);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
