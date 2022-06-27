const Author = require('../services/Authors');
const Joi = require('joi');

const getAll = async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (author.error) return next(author.error);

  res.status(200).json(author);
};

const createAuthor = async (req, res, next) => {
  const {
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
    contacts,
  } = req.body;

  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required(),
    contacts: Joi.array().items(Joi.string().length(15).required()).min(1).required(),
  }).validate({ firstName, lastName, contacts});

  if (error) {
    return next(error);
  }

  const newAuthor = await Author.createAuthor(firstName, middleName, lastName, contacts);

  if (newAuthor.error) return next(newAuthor.error);

  return res.status(201).json(newAuthor);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};