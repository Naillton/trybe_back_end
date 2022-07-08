const { Router } = require('express');
const userController = require('../controllers/userController');
const {
  validUser,
  validUserId,
  validInsertUser,
  validUpdateUser,
} = require('../middlewares/userErrors');

const router = Router();

router.get('/',validUser, userController.getUser);
router.get('/:id', validUserId, userController.getUserById);
router.post('/',validInsertUser, userController.createUser);
router.put('/:id', validUpdateUser, userController.editUser);
router.delete('/:id', userController.delUser);

module.exports = router;