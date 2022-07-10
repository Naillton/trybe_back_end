const { Book } = require('../database/models');

const bookService = {
  async getAll() {
    const books = await Book.findAll();
    return books;
  },

  async getById(id) {
    const book = await Book.findByPk(id);
    return book;
  },

  async insertBook(title, author, pageQuantity) {
    const book = await Book.create({
      title,
      author,
      pageQuantity
    });
    return book;
  },

  async updateBook(id, title, author, pageQuantity) {
    const book = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );
    return book;
  },

  async delBook(id) {
    const book = await Book.destroy({ where: { id }});
    return book;
  }
};

module.exports = bookService;