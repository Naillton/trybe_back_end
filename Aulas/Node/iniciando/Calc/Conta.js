const rl = require('readline-sync');

const Operation = (simbol, firstNumber, secondNumber) => {
  switch(simbol){
    case '+':
      return firstNumber + secondNumber;
    break;
    case '-':
      return firstNumber - secondNumber;
    break;
    case '*':
      return firstNumber * secondNumber;
    break;
    case '/':
      return firstNumber / secondNumber;
    break;
  }
}

module.exports = Operation;