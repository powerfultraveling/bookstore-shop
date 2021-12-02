'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Orders', 'comment', {
      type: Sequelize.STRING
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Orders", "comment")
  }
};