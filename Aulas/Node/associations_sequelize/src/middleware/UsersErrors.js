const UsersService = require('../services/UsersService');

const validUserId = async (req, res, next) => {
  const { id } = req.params;
  const user = await UsersService.getById(id);
  if(!user) return res.status(404).json({ message: 'Usuário não encontrado'});
  next();
}

module.exports = {
  validUserId,
}