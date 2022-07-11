const { Router } = require('express');
const EmployeesController = require('../controllers/EmployeesController');
const {
  validEmployeeId,
} = require('../middleware/EmployeeErrors');
const router = Router();

router.get('/', EmployeesController.getAll);
router.get('/:id', validEmployeeId, EmployeesController.getById);
router.post('/', EmployeesController.insertEmployee);

module.exports = router;