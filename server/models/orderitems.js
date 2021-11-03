"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderItems.belongsTo(models.Orders, {
        foreignKey: "orderId",
        targetKey: "id",
      });
      OrderItems.belongsTo(models.Product, {
        foreignKey: "productId",
        targetKey: "id",
      });
    }
  }
  OrderItems.init(
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderItems",
    }
  );
  return OrderItems;
};
