const fs = require('fs').promises;

const arquive = 'meu-arquivo.txt';

fs.readFile(arquive, 'utf8')
  .then((data) => {
      console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possivel ler o arquivo ${arquive}`)
    process.exit(1);
  });