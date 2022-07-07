const rescue = require('express-rescue');
const Author = require('../controllers/Authors');
const { Router } = require('express');

const AuthorRoute = Router();

AuthorRoute.get('/:id', rescue(Author.findById));

AuthorRoute.post('/', rescue(Author.createAuthor));

module.exports = AuthorRoute;