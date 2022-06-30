const cepService = require('../services/Cep');

const cepController = {
  async getByCep(req, res) {
    const { cep } = req.params;
    const ceps = await cepService.checkIfValidateCep(cep);
    res.status(200).json(ceps); 
  }
}

module.exports = cepController;