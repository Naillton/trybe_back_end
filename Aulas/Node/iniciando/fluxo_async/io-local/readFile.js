// metodo async no readile

const fs = require('fs');

const arquive = 'meu-arquivo.txt';

fs.readFile(arquive, 'utf8', (err, data) => {
  if(err) {
    console.log(`Não foi possivel ler o arquivo ${arquive}`);
    process.exit(1);
  }
  console.log(`Conteudo do arquivo: ${data}`);
})