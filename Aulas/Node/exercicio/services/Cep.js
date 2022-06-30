const Cep = require('../models/Cep');

const cepService = {
  async checkIfValidateCep(cep) {
    const ceps = await Cep.getByCep(cep);
    if(ceps === null) return false;
    return ceps;
  },
  
};

module.exports = cepService;