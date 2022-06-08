const fs = require('fs');

const arquive = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(arquive, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler arquivo: ${err.path}`);
  console.log(err);
}