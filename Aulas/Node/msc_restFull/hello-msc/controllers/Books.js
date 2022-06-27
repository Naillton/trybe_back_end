const Books = require('../services/Books');

const getAll = async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const books = await Books.getById(id);

  if (books.error) return next(books.error);

  res.status(200).json(books);
};

const getByAuthorId = async (req, res) => {
  const { id } = req.params;

  const book = await Books.getByAuthorId(id);

  if(book.error) return next(book.error);

  res.status(200).json(book);
};

module.exports = {
  getAll,
  getById,
  getByAuthorId
}