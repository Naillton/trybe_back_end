'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'RG', {
      type: Sequelize.INTEGER,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeCOlumn('Users', 'RG');
  }
};
