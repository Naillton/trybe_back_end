const rl = require('readline-sync');
const name = rl.question('Qual o seu nome ? ');
const first = rl.questionInt('Qual o primeiro numero ? ');
const second = rl.questionInt('Qual o segundo numero ? ');
const operator = rl.question('Escolha um operador *, +, -, / ? ');

module.exports = {
  name,
  first,
  second,
  operator,
}