const fs = require('fs').promises;

const main = async () => {
  try{
    await fs.writeFile('./meu-arquivo.txt',  'Meu textao com async await');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.log(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main();