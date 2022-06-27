const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const errorMiddleware = require('./middlewares/error');
const Author = require('./controllers/Authors');
const Books = require('./controllers/Books');

const app = express();

app.use(errorMiddleware);
app.use(bodyParser.json());

app.get('/authors', rescue(Author.getAll));

app.get('/books', rescue(Books.getAll));

app.get('/books/:id', rescue(Books.getById));

app.get('/books/author/:id', rescue(Books.getByAuthorId));

app.get('/authors/:id', rescue(Author.findById));

app.post('/authors', rescue(Author.createAuthor));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});