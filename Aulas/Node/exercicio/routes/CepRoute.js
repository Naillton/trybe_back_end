const { Router } = require('express');
const cepController = require('../controllers/Cep');
const { CepValid } = require('../middlewares/CepMiddleware');

const cepRoute = Router();

cepRoute.get('/:cep',CepValid, cepController.getByCep);

module.exports = cepRoute;