const readLineSync = require('readline-sync');

const name = readLineSync.question('Qual o seu nome ? ');
const idade = readLineSync.questionInt('Qual a sua idade ? ')
console.log(` Ola ${name}, voce tem ${idade} ano(s)`);