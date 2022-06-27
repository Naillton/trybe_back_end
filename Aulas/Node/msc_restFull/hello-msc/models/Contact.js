const connection = require('./connection');

const createContact = async (id, contact) => connection.execute(
  `INSERT INTO contacts (author_id, contact) VALUES (?,?)`, [id, contact]
);

module.exports = {
  createContact,
}