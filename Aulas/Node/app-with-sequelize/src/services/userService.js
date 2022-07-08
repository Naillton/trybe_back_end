const { User } = require('../database/models');

const userService = {
  async getUser() {
    const users = await User.findAll();
    return users;
  },

  async getUserById(id) {
    const user = await User.findOne({ where: { id }});
    return user;
  },

  async createUser(fullName, email) {
    const user = await User.create({fullName, email});
    return user;
  },

  async editUser(id, name, email) {
    const user = await User.update(
      { name, email },
      { where: { id } },
    );
    return user;
  },

  async delUser(id) {
    const userDel = await User.destroy({ where: { id }});
    return userDel;
  }
};

module.exports = userService;