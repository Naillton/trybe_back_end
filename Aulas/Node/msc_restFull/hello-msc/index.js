const express = require('express');
const bodyParser = require('body-parser');
const errorMiddleware = require('./middlewares/error');
const BookRoute = require('./routes/Books');
const AuthorRoute = require('./routes/Authors');

const app = express();

app.use(errorMiddleware);
app.use(bodyParser.json());

app.use('/authors', AuthorRoute);

app.use('/books', BookRoute);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});