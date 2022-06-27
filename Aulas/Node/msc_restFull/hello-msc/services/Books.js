const Books = require('../models/Books');

const getAll = async () => Books.getAll();

const getById = async (id) => {
  const books = await Books.getById(id);

  if (!books) {
    return {
      error: {
        code: 'not-found',
        message: 'Não foi possivel encontrar o id do livro'
      },
    };
  }

  return books;
}

const getByAuthorId = async (id) => {
  const books = await Books.getByAuthorId(id);

  if (!books) {
    return {
      error: {
        code: 'not-found',
        message: 'Não foi possivel encontrar o id do autor do livro'
      },
    };
  }

  return books;
}

module.exports = {
  getAll,
  getById,
  getByAuthorId
}