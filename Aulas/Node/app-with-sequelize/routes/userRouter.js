const { Router } = require('express');
const router = Router();

const userController = require('../controllers/userController');
const {
  validUser,
  validUserId,
  validInsertUser,
  validUpdateUser,
} = require('../middlewares/userErrors');

router.get('/',validUser, userController.getUser);
router.get('/:id', validUserId, userController.getUserById);
router.post('/',validInsertUser, userController.createUser);
router.delete('/:id', userController.delUser);

module.exports = router;