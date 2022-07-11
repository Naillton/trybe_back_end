const { Router } = require('express');
const UsersController = require('../controllers/UsersControllers');
const { validUserId } = require('../middleware/UsersErrors');
const router = Router();

router.get('/:id', validUserId, UsersController.getById);

module.exports = router;