const userService = require('../services/userService');

const validUser = async (_req, res, next) => {
  const users = await userService.getUser();
  if(!users) return res.status(500).json({ message: 'Algo deu errado'});
  next();
}

const validUserId = async (req, res, next) => {
  const { id } = req.params;
  const users = await userService.getUserById(id);
  if(!users) return res.status(404).json({ message: 'Usuário não encontrado' });
  next();
}

const validInsertUser = async (req, res, next) => {
  const { fullName, email } = req.body
  if(fullName.length <= 3 || fullName === undefined) return res.status(404).json({ message: 'Usuario precisa ter um nome'});
  if(email.length <= 9 || email === undefined) return res.status(404).json({ message: 'O email precisa ser maior'});
  next();
}

const validUpdateUser = async (req, res, next) => {
    const { fullName, email } = req.body;
    const { id } = req.params;
    const [updateUser] = await userService.editUser(id, fullName, email);
    if(!updateUser) return res.status(404).json({ message: 'Usuário não encontrado' });
    next();
}

module.exports = {
  validUser,
  validUserId,
  validInsertUser,
}