const express = require('express');
const fs = require('fs/promises');

const App = express();

App.get('/:fileName', async (req, res, next) => {
  try{
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  } catch (e){
    next(e);
  }
});

App.use((err, req, res, ext) => {
  res.status(500).json({error: `Erro: ${err.message}`});
});

App.listen(3002, () => console.log('erro port 3002'));