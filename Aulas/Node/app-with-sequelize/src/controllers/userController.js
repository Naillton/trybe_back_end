const userService = require('../services/userService');

const userController = {
  async getUser(_req, res) {
    const users = await userService.getUser();
    return res.status(200).json(users);
  },

  async getUserById(req, res) {
    const { id } = req.params;
    // const [ email ] = req.query;
    const user = await userService.getUserById(id);
    return res.status(200).json(user);
  },

  async createUser(req, res) {
    const { fullName, email } = req.body;
    const newUser = await userService.createUser(fullName, email);
    console.log(newUser);
    return res.status(201).json(newUser);
  },

  async editUser(req, res) {
    const { fullName, email } = req.body;
    const { id } = req.params;
    await userService.editUser(id, fullName, email);
    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  },

  async delUser(req, res) {
    const { id } = req.params;
    await userService.delUser(id);
    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  }
};

module.exports = userController;