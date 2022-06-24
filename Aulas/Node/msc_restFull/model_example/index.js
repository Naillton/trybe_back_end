const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const Book = require('./models/Book');
const { validate, validateTitle, validateIdAuthor } = require('./middleware');

const App = express();
App.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

App.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

App.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

App.get('/books/authors/:id', async (req, res) => {
  const bookId = await Book.getByAuthorId(Number(req.params.id));

  res.status(200).json(bookId);
});

App.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const bookId = await Book.getById(Number(id));
  
  if (!bookId) return res.status(404).json({ message: 'not found' });

  res.status(200).json(bookId);
});


App.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const authorId = await Author.getById(Number(id));

  if(!authorId) return  res.status(404).json({ message: 'not found' });

  res.status(200).json(authorId);
});

App.post('/authors', validate, async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

App.post('/books',
  validateTitle,
  validateIdAuthor,
  async (req, res) => {
    const { title, author_id } = req.body;

    await Book.createBook(title, author_id);

    res.status(201).json({ message: 'Livro criado com sucesso! '});
});

App.listen(PORT, () => console.log(`Listen PORT: ${PORT}`));