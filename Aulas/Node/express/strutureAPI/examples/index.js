const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const App = express();
App.use(bodyParser.json());
App.use(cors());

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

App.get('/drinks', (req, res) => {
  res.json(drinks.sort((a, b) => {
    return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
  }));
});

App.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filterDrk = drinks.filter((filt) => filt.name.includes(name));

  res.status(200).json(filterDrk);
});

App.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((drk) => drk.id === Number(id));
  
  if(!drink) return res.status(404).json({ message: 'URL NOT FOUND'});

  res.status(200).json(drink);
});

App.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const drink = drinks.findIndex((ident) => ident.id === Number(id));

  drink === -1 && res.status(404).json({message: 'Drink Not Found'});

  drinks[drink] = { ...drinks[drink], name, price};

  res.status(204).end();
});

App.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.findIndex((ident) => ident.id === Number(id));

  drink == -1 && res.status(404).json({message: 'Drink Not Found'});

  drinks.splice(drink, 1);

  res.status(204).end();
});

App.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: "Drink created successfully!"});
});

App.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  token.length !== 16 && res.status(404).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'});
});

App.get('/xablau', (req, res) => {
  return res.status(404).json({message: 'XABLLAAAAUUUUUUUUU!!! CATCHAAUUMMMMM'});
});

App.all('*', (req, res) => {
  return res.status(404).json({message: `Rota '${req.path}' não existe!`});
});

App.listen(3002, () => console.log('drinks requisition'));