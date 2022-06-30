const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '89@junior',
  database: 'cep_lookup',
});

module.exports = connection;