const db = require("../models");
const Product = db.Product;
const Categories = db.Categories;

const productController = {
  getProductsStationary: (req, res) => {
    Product.findAll({
      where: {
        categoriesId: 2,
      },
    }).then((data) => {
      res.json(data);
    });
  },

  getProductsBook: (req, res) => {
    Product.findAll({
      where: {
        categoriesId: 1,
      },
    }).then((data) => {
      res.json(data);
    });
  },

  getSingleProduct: (req, res) => {
    const id = req.params.id;
    Product.findOne({
      where: {
        id: id,
      },
    }).then((data) => {
      res.json(data);
    });
  },

  getProduct: (req, res) => {
    Product.findAll().then((data) => {
      res.json(data);
    });
  },

  addProduct: (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    const amount = req.body.amount;
    const categoriesId = req.body.category;
    Product.create({
      name: name,
      description: description,
      price: price,
      image: image,
      amount: amount,
      categoriesId: categoriesId,
    })
      .then(() => {
        res.json({ ok: 1 });
      })
      .catch(() => {
        res.json({ ok: 0 });
      });
  },

  deleteProduct: (req, res) => {
    const id = req.params.id;
    Product.findOne({
      where: {
        id: id,
      },
    })
      .then((data) => {
        data.destroy();
      })
      .then(() => {
        Product.findAll().then((data) => {
          res.json(data);
        });
      });
  },
};

module.exports = productController;
