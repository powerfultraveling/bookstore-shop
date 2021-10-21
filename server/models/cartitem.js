"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartItem.belongsTo(models.Cart, {
        foreignKey: "cartId",
        targetKey: "id",
      });
      CartItem.belongsTo(models.Product, {
        foreignKey: "productId",
        targetKey: "id",
      });
    }
  }
  CartItem.init(
    {
      cartId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "CartItem",
    }
  );
  return CartItem;
};
