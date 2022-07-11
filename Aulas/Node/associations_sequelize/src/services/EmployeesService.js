const { Address, Employee } = require('../database/models');
const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test'
  ? config.test : config.development
);

const EmployeesService = {
  async getAll() {
    const emp = await Employee.findAll({
      include: { model: Address, as: 'addresses'},
    });
    console.log(emp);
    return emp;
  },

  async getById(id) {
    const emp = await Employee.findOne({
      where: { id },
      include: [{ model: Address, as: 'addresses', attributes: { exclude: ['number'] } }],
    });
    return emp;
  },

  async insertEmployee(firstName, lastName, age, city, street, number) {
    // iniciamos a transação
    const t = await sequelize.transaction();
    const emp = await Employee.create(
      {
        firstName,
        lastName,
        age
      },
      { transaction: t },
    );

    await Address.create(
      {
        city,
        street,
        number,
        employeeId: emp.id
      },
      { transaction: t },
    );

    const transactionCorrect = await t.commit();
    return transactionCorrect;
  }
};

module.exports = EmployeesService;