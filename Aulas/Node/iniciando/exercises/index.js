const number = (parameter) => {
  const positivo = 'positivo';
  const neutro = 'neutro';
  const negativo = 'negativo';
  
  if(parameter > 0) {
    return positivo;
  }
  
  if(parameter === 0){
    return neutro;
  }
  
  if(parameter < 0){
    return negativo;
  }
}

module.exports = number;