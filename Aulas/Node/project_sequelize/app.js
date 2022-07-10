const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./src/routes/BookRouter');

const app = express();

app.use(bodyParser.json());
app.use('/books', bookRouter);

module.exports = app