const connection = require('./connection');

// Busca todos os autores do banco.
const getAll = async () => {
  const [authors] = await connection.execute(`
  SELECT
    id,
    first_name AS fistName,
    middle_name AS middleName,
    last_name AS lastName,
    contact,
    CONCAT(first_name, " ", first_name, " ", last_name) AS fullName
  FROM authors AS aut
  JOIN contacts AS cont
  ON aut.id = cont.author_id;
`);
  return authors;
};
/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/
const findById = async (id) => {
  const query = `
  SELECT 
    id, 
    first_name AS fistName,
    middle_name AS middleName, 
    last_name AS lastName, 
    contact,
    CONCAT(first_name, " ", first_name, " ", last_name) AS fullName
  FROM authors AS aut
  JOIN contacts AS cont
  ON aut.id = cont.author_id
  WHERE id = ?
`;

  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  return authorData;
};

const createAuthor = async (firstName, middleName, lastName) => {
  const [author] = await connection.execute(
    'INSERT INTO authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName],
  );
  return ({ id: author.insertId, firstName, middleName, lastName });
};

const findByname = async (firstName, middleName, lastName) => {
  let query = `
  SELECT id, 
    first_name AS fistName,
    middle_name AS middleName, 
    last_name AS lastName, contact,
    CONCAT(first_name, " ", first_name, " ", last_name) AS fullName
  FROM authors AS aut
  JOIN contacts AS cont
  ON aut.id = cont.author_id
  WHERE first_name = ? AND
`;

  query += middleName ?  ' middle_name = ? AND last_name = ?' : 'last_name = ?';

  const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];

  const [authorData] = await connection.execute(query, params);
  
  if (authorData.length === 0) return null;

  return authorData;
}

module.exports = {
  getAll,
  findById,
  createAuthor,
  findByname
};