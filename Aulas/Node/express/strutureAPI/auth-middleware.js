const validUsers = [
  { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
  { username: 'McRonald', password: 'Senha123Mudar' },
  { username: 'Burger Queen', password: 'Senha123Mudar' },
  { username: 'UpWay', password: 'Senha123Mudar' },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if(!username || !password) return res.status(401).json({message: "Username Or Password be blank"});

  const foundUser = validUsers.find((user) => user.username === username);

  if(!foundUser) return res.status(401).json({message: 'Invalid credentials'});

  if(!(username !== validUsers.username || password !== validUsers.password)){
    return res.status(401).json({message: "Username Or Password is Invalid"});
  }

  req.user = foundUser;
  next();
}

module.exports = authMiddleware;