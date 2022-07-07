const number = (parameter) => {
  const positivo = 'positivo';
  const neutro = 'neutro';
  const negativo = 'negativo';
  const notNumber = 'o valor deve ser um número';
  
  if(parameter > 0) {
    return positivo;
  }
  
  if(parameter === 0){
    return neutro;
  }
  
  if(parameter < 0){
    return negativo;
  }

  if(isNaN(parameter)){
    return notNumber;
  }
}

module.exports = number;