'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'phone_num', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeCOlumn('Users', 'phone_num');
  }
};
