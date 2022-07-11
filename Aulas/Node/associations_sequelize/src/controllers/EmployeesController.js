const { insertEmployee } = require('../services/EmployeesService');
const EmployeesService = require('../services/EmployeesService');

const EmployeesController = {
  async getAll(_req, res) {
    const emp = await EmployeesService.getAll();
    return res.status(200).json(emp);
  },

  async getById(req, res) {
    const { id } = req.params;
    const emp = await EmployeesService.getById(id);
    return res.status(200).json(emp);
  },

  async insertEmployee(req, res) {
    const { firstName, lastName, age, city, street, number } = req.body;
    await EmployeesService.insertEmployee(
      firstName,
      lastName,
      age,
      city,
      street,
      number
    );
    res.status(201).json({ message: 'Cadastrado com sucesso' });
  }
};

module.exports = EmployeesController;