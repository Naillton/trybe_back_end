const { JWT } = require('../auth/authJWT');
const UserSerice = require('../services/UsersServices');

const UsersControllers = {
  async getAll(_req, res) {
    const users = await UserSerice.getAll();
    if (!users) return res.status(500).json({ message: 'Algo deu errado' });
    res.status(200).json(users);
  },
  
  async login(req, res) {
    const { email, password } = req.body;
    const user = await UserSerice.login(email, password);
    const token = JWT(user);
    res.status(200).json({ token });
  },

  async findById(req, res) {
    const { id } = req.params;
    const user = await UserSerice.findById(id);
    if (!user) return res.status(404).json({ message: 'Usuario não encontrado' });
    res.status(200).json(user);
  },
};

module.exports = UsersControllers;