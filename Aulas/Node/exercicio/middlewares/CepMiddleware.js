const cepService = require('../services/Cep');
const reg = /^\d{5}-?\d{3}$/;

const CepValid = async (req, res, next) => {
  const { cep } = req.params;
  if(!reg.test(cep)) return res.status(400).json({ error: { code: "invalidData", message: "Cep inválido" }});
  const ceps = await cepService.checkIfValidateCep(cep);
  if(!ceps) return res.status(404).json({ error: {code: "notFound", message: "Cep não encontrado "}});
  next();
}

module.exports = {
  CepValid,
}
