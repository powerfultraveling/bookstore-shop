const { raw } = require("body-parser");
const db = require("../models");
const Cart = db.Cart;
const Product = db.Product;
const CartItem = db.CartItem;

const cartController = {
  addCart: (req, res) => {
    const userId = req.body.userId;
    const productId = req.body.productId;

    Cart.findOrCreate({
      where: {
        userid: userId,
      },
      default: {
        userid: userId,
      },
      raw: true,
    })
      .then((cart) => {
        console.log("hallo");
        console.log(cart);
        CartItem.create({
          cartId: cart[0].id,
          productId: productId,
        })
          .then((cartItem) => {
            console.log(cartItem);
            res.send("cart Item success");
          })
          .catch((err) => {
            res.send(err.toString());
          });
      })
      .catch((err) => {
        res.send(err.toString());
      });
  },

  getCart: (req, res) => {
    const id = req.params.id;

    Cart.findOne({
      where: {
        userid: id,
      },
      raw: true,
    })
      .then((cart) => {
        console.log(cart);
        CartItem.findAll({
          where: {
            cartId: cart.id,
          },
          include: Product,
        })
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            res.json({ errorMessage: err.toString() });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = cartController;
