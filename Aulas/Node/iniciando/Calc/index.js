const operation = require('./Conta');
const { name, first, second, operator } = require('./Question');

function Conta() {
  console.log(`Olá ${name}`);
  console.log(`Seu primeiro numero é ${first} e seu segundo numero e ${second}`);
  const result = operation(operator, first, second);
  console.log(`${first} ${operator} ${second} = ${result}`);
}

Conta();
