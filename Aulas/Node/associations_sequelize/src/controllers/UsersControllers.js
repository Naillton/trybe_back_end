const UsersService = require('../services/UsersService');

const UsersController = {
  async getById(req, res) {
    const { id } = req.params;
    const user = await UsersService.getById(id);
    res.status(200).json(user);
  }
}

module.exports = UsersController;