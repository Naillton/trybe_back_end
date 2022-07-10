const { Router } = require('express');
const {
  validBooks,
  validBookId,
  validInsertBook,
  validUpdateBook,
  validDelBook
} = require('../middlewares/BookMiddleware');
const bookController = require('../controllers/BooksController');

const router = Router();

router.get('/', validBooks, bookController.getAll);
router.get('/:id', validBookId, bookController.getById);
router.post('/', validInsertBook, bookController.insertBook);
router.put('/:id', validUpdateBook, bookController.updateBook);
router.delete('/:id', validDelBook, bookController.delBook);

module.exports = router;