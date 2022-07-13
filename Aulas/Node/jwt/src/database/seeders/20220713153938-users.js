module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users',
    [
      {
        email: 'jhonDoe@gmail.com',
        password: 'jhonDoe123',
      },
      {
        email: 'carlos@gmail.com',
        password: 'carlos123',
      },
      {
        email: 'joseGoku@gmail.com',
        password: 'vegetamelhorquegoku',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
