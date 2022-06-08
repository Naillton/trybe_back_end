// teste simples para a funcao calculateAVG

const calculateAVG = require('./index');

console.log('Quando a média for menor que 7, retorna reprovacao');

const min = calculateAVG(4);

if( min === 'Reprovado') {
  console.log(`ok passou no teste`);
} else {
  console.error('Resposta não esperada');
}
console.log('-----------------------------------------------------------------');
console.log('Segundo teste media maior ou igual a 7 recebe aprovacao');

const max = calculateAVG(7);
if( max === 'Aprovado') {
    console.log(`ok passou no teste`);
  } else {
    console.error('Resposta não esperada');
  }