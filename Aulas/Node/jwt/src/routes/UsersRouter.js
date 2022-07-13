const { Router } = require('express');
const UsersControllers = require('../controllers/UsersControllers');
const validateJWT = require('../auth/validateJWT');

const router = Router();

router.get('/', validateJWT, UsersControllers.getAll);
router.get('/:id', validateJWT, UsersControllers.findById);
router.post('/login', UsersControllers.login);

module.exports = router;