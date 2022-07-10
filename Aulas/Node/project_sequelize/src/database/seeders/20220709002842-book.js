'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books',[
      {
        title: 'O Silmarillion',
        author: 'J. R. R. Tolkien',
        page_quantity: 500,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Os Filhos de Húrin',
        author: 'J. R. R. Tolkien',
        page_quantity: 500,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Beren e Lúthien',
        author: 'J. R. R. Tolkien',
        page_quantity: 500,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'A Queda de Gondolin',
        author: 'J. R. R. Tolkien',
        page_quantity: 500,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Contos Inacabados',
        author: 'J. R. R. Tolkien',
        page_quantity: 500,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O Hobbit',
        author: 'J. R. R. Tolkien',
        page_quantity: 500,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O Senhor dos Anéis: A Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        page_quantity: 500,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O Senhor dos Aneis: As duas torres',
        author: 'J. R. R. Tolkien',
        page_quantity: 500,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O Senhor dos Anéis: O retorno do rei',
        author: 'J. R. R. Tolkien',
        page_quantity: 500,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
