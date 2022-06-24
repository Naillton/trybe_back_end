const connection = require('./connection');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');

    return {
      id,
      firstName,
      middleName,
      lastName,
      fullName
    };
}

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name
});

const isValid = (firstName, middleName, lastName) => {
  if(!firstName || typeof firstName !== 'string') return false;
  if(!lastName || typeof lastName !== 'string') return false;
  if(middleName && typeof middleName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => {
  const createAuthor = connection.execute(
    'INSERT INTO authors (first_name, middle_name, last_name) VALUES (?,?,?)',[firstName,middleName,lastName]
  );
  
  return createAuthor;
}
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors'
  );
  return authors.map(serialize).map(getNewAuthor);
};

const getById = async (id) => {
  const [author] = await connection.execute(
    'SELECT * FROM authors WHERE id = ?', [id]
  );

  if(author.length === 0) return null;

  const { firstName, middleName, lastName } = author.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
}

module.exports = {
  getAll,
  getById,
  isValid,
  create,
};