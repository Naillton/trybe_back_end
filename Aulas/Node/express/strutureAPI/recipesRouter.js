const express = require('express');
const authMiddleware = require('./auth-middleware');
const router = express.Router();
router.use(authMiddleware);

const recipes = [
    { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
    { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
    { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
    { id: 4, name: 'Macarrão com molho rose', price: 42.0, waitTime: 25 },
];

const validateName = (req, res, next) => {
    const { name } = req.body;
    if (!name || name === '') return res.status(400).json({message: 'Invalid data!'});
  
    next();
  }
  
  const validatePrice = (req, res, next) => {
    const { price } = req.body;
    if (!price || price < 0 || isNaN(price)) return res.status(400).json({message: 'Invalid price'});
  
    next();
  }

router.get('/', (req, res) => {
    res.status(200).json(recipes);
  });
  
  router.get('/', (req, res) => {
    res.json(recipes.sort((a, b) => {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    })); // ustilizando json para obter retorno de um aray de objetos
  });
  
  router.get('/search', (req, res) => {
    const { name, maxPrice, minPrice } = req.query;
    const filterRcp = recipes.filter(
      (filt) => filt.name.includes(name) && filt.price >= Number(minPrice) || filt.price < Number(maxPrice));
  
    res.status(200).json(filterRcp);
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    const recipe = recipes.find((ident) => ident.id === Number(id));
  
    if(!recipe) return res.status(404).json({message: 'Recipe not found'});
  
    res.status(200).json(recipe);
  });
  
  router.post('/',validatePrice, validateName, (req, res) => {
    const { id, name, price } = req.body;
    const { username } = req.user;
    recipes.push({ id, name, price, chef: username });
    res.status(201).json({message: 'Recipe created successfully!'});
  });
  
  router.put('/:id',validatePrice, (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const recipe = recipes.findIndex((ident) => ident.id === Number(id));
  
    if(recipe === -1) return res.status(404).json({message: 'Recipe not found'});
  
    recipes[recipe] = { ...recipes[recipe], name, price };
  
    res.status(204).end();
  });
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const recipe = recipes.findIndex((ident) => ident.id === Number(id));
  
    recipe === -1 && res.status(404).json({message: 'Recipe Not Found'});
  
    recipes.splice(recipe, 1);
  
    res.status(204).end();
  });
module.exports = router;