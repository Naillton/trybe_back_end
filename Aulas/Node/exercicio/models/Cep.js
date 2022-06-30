const connection = require('./connection');

const reg = /^\d{5}-\d{3}$/;

const formate = (cep) => {
  if (reg.test(cep)) return cep;

  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const getByCep = async (cepSearch) => {
  const cepBD = cepSearch.replace('-', '');
  const query = `SELECT * FROM ceps WHERE cep = ? `;

  const result = await connection.execute(query, [cepBD])
  .then(([results]) => (results.length ? results[0] : null ));

  if(!result) return null;

  return result;
}

module.exports = {
  getByCep
};