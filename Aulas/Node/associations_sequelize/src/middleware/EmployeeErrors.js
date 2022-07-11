const EmployeesService = require('../services/EmployeesService');

const validEmployeeId = async (req, res, next) => {
  const { id } = req.params;
  const emp = await EmployeesService.getById(id);
  if(!emp) return res.status(404).json({ message: 'Funcionário não encontrado '});
  next();
}

module.exports = {
  validEmployeeId,
}