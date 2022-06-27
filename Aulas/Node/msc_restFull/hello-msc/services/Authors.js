const Author = require('../models/Author');
const Contact = require('../models/Contact');

const getAll = async () => Author.getAll();

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'not-found',
        message: 'Não foi possivel encontrar uma pessoa autora com o id informado'
      },
    };
  }

  return author;
}

const createAuthor = async (firstName, middleName, lastName, contacts) => {
  const exixtingAuthor = await Author.findByname(firstName, middleName, lastName);

  if (exixtingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }

  const { id } = await Author.createAuthor(firstName, middleName, lastName);

  await Promise.all(contacts.map((contact) => Contact.createContact(id, contact)));

  return ({ id, firstName, middleName, lastName, contacts });
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};