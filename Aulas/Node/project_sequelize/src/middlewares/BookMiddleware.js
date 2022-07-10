const bookService = require('../services/BooksService');

const validBooks = async (_req, res, next) => {
  const book = await bookService.getAll();
  if(!book) return res.status(500).json({ message: "Algo deu errado" });
  next();
}

const validBookId = async (req, res, next) => {
  const { id } = req.params;
  const book = await bookService.getById(id);
  if(!book) return res.status(404).json({ message: "Book not found" });
  next();
}

const validInsertBook = async (req, res, next) => {
  const { title, author, pageQuantity } = req.body;
  if(!title) return res.status(404).json({ message: "Insira o titulo do livro" });
  if(!author) return res.status(404).json({ message: "Insira o titulo do livro" });
  if(!pageQuantity) return res.status(404).json({ message: "Insira o titulo do livro" });
  next();
}

const validUpdateBook = async (req, res, next) => {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;
  const updateBook = await bookService.updateBook(id, title, author, pageQuantity);
  if(!updateBook) return res.status(404).json({ message: "Book not found!"});
  next();
}

const validDelBook = async (req, res, next) => {
  const { id } = req.params;
  const delBook = await bookService.delBook(id);
  if(!delBook) return res.status(500).json({ message: "Algo deu errado"});
  next();
}

module.exports = {
  validBooks,
  validBookId,
  validInsertBook,
  validUpdateBook,
  validDelBook,
}