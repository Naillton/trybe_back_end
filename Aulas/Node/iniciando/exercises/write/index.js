const fs = require('fs').promises;
const conteudo = 'escrevendo';

const write = (arquivo, texto) => {
  try{
    fs.writeFile(arquivo, texto);
    console.log('ok');
    return 'ok';
  } catch (err) {
    console.error(`Erro: ${err.message}`);
    return `Erro: ${err.message}`;
  }
}

write('./arquive.txt', conteudo);
module.exports = write;