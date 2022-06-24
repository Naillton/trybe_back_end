const connection = require('./connection');
const Author = require('./Author');


const valid = async (id, title, author_id) => {
  if(!title || title.length < 2) return false;
  if(!author_id || typeof author_id !== 'number' || !(await Author.getById(author_id))) return false;

  return true;
}

const createBook = async (title, author_id) => {
  const addBook = connection.execute(
    'INSERT INTO books (title, author_id) VALUES (?,?)', [title, author_id]
  );

  return addBook;
}

const getAll = async () => {
  const [book] = await connection.execute(
    'SELECT * FROM books'
  );

  return book;
};

const getByAuthorId = async (id) => {
  const [bookId] = await connection.execute(
    'SELECT title FROM books WHERE author_id = ?', [id]
  );

  return bookId;
};

const getById = async (id) => {
  const [[bookId]] = await connection.execute(
    'SELECT * FROM books WHERE id = ?', [id]
  );

  return bookId;
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  valid,
  createBook,
};