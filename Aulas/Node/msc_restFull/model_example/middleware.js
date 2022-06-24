const Author = require('./models/Author');

const validate = (req, res, next) => {
  const { first_name, middle_name, last_name } = req.body;

  if(!Author.isValid(first_name, middle_name, last_name)){
    return res.status(400).json({ message: 'Dados inválidos'});
  }

  next();
}

const validateTitle = (req, res, next) => {
  const { title } = req.body;

  if(!title || title.length < 2) return res.status(400).json({ message: 'Dados inválidos '});

  next();
};

const validateIdAuthor = async (req, res, next) => {
  const { author_id } = req.body;

  if(!author_id || typeof author_id !== 'number' || !(await Author.getById(author_id))) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  next();
};

module.exports = {
  validate,
  validateTitle,
  validateIdAuthor,
}