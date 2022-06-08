const calculateAVG = (AVG) => {
  if(AVG < 7){ return 'Reprovado'};
  return 'Aprovado';
}

module.exports = calculateAVG;