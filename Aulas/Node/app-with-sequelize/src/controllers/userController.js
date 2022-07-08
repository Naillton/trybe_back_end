const { User } = require('../database/models');

const userController = {
  async getUser(_req, res) {
    const users = await User.findAll();
    return res.status(200).json(users);
  },

  async getUserById(req, res) {
    const { id } = req.params;
    // const [ email ] = req.query;
    const user = await User.findOne({ where: { id }});
    return res.status(200).json(user);
  },

  async createUser(req, res) {
    const { fullName, email } = req.body;
    const newUser = await User.create({ fullName, email });

    return res.status(201).json(newUser);
  },

  async editUser(req, res) {
    const { fullName, email } = req.body;
    const { id } = req.params;

    await User.update(
      { fullName, email },
      { where: { id } },
    );

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  },

  async delUser(req, res) {
    const { id } = req.params;
    await User.destroy(
      { where: { id } },
    );
    
    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  }
};

module.exports = userController;