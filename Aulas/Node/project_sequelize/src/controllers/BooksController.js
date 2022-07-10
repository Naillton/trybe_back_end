const bookService = require('../services/BooksService');

const bookController = {
  async getAll(_req, res) {
    const book = await bookService.getAll();
    res.status(200).json({ book });
  },

  async getById(req, res) {
    const { id } = req.params;
    const book = await bookService.getById(id);
    res.status(200).json({ book });
  },

  async insertBook(req, res) {
    const { title, author, pageQuantity } = req.body;
    const book = await bookService.insertBook(title, author, pageQuantity);
    res.status(201).json(book);
  },

  async updateBook(req, res) {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    await bookService.updateBook(id, title, author, pageQuantity);
    return res.status(200).json({ message: "Book updated!"});
  },

  async delBook(req, res) {
    const { id } = req.params;
    await bookService.delBook(id);
    return res.status(200).json({ message: "Book deleted"});
  }
};

module.exports = bookController;