// lendo arquivos de maneira assincrona com Promisses
const fs = require('fs');

const Read = (fileName) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      err && reject(new Error('Impossivel ler arquivo solicitado'));
      resolve(content);
    });
  });

  return promise;
}

Read('./arquivo.txt')
  .then((result) => console.log(result.toString()))
  .catch((err) => console.log(err.message))