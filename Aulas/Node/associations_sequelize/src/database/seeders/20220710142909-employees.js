'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees',
    [
      {
        first_name: 'Marcos',
        last_name: 'Zuck',
        age: 49,
      },
      {
        first_name: 'Fred',
        last_name: 'Mercurio',
        age: 19,
      },
      {
        first_name: 'Ayrton',
        last_name: 'Keno',
        age: 51,
      },
      {
        first_name: 'Robin',
        last_name: 'Mathias',
        age: 63,
      },
      {
        first_name: 'Antonio',
        last_name: 'Augusto',
        age: 18,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
