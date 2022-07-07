const rescue = require('express-rescue');
const Books = require('../controllers/Books');
const { Router } = require('express');

const BookRoute = Router();

BookRoute.get('/', rescue(Books.getAll));

BookRoute.get('/:id', rescue(Books.getById));

BookRoute.get('/author/:id', rescue(Books.getByAuthorId));

module.exports = BookRoute;