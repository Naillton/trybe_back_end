const { User } = require('../database/models');

const UserSerice = {
  async getAll() {
    const users = await User.findAll();
    return users;
  },

  async login(email, password) {
    const user = User.findOne({ where: { email, password } });
    return user;
  },

  async findById(userId) {
    const user = User.findOne({ where: { userId } });
    return user;
  },
};

module.exports = UserSerice;