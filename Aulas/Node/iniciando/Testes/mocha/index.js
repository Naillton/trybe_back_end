const calculateAVG = (AVG) => {
  if(AVG < 7){ return 'Reprovado'};
  return 'Aprovado';
}

const soma = (num1, num2) => {
  return num1 + num2;
}

const sub = (num1, num2) => {
  return num1 - num2;
}

const mult = (num1, num2) => {
  return num1 * num2;
}
  
module.exports = { calculateAVG, soma, sub, mult};