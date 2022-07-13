const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const secret = process.env.JWT;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }
  
  try {
    const decoded = jwt.verify(token, secret);

    const email = await User.findOne({ where: { email: decoded.data.email } });
    if (!email) {
      return res.status(401).json({ message: 'Erro ao procurar email o token.' });
    }
    req.email = email;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};