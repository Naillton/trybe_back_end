const { A, B, C } = require('./random');

const func = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number'){
      reject(new Error('Informe apenas números'))
    }

    if(((num1 + num2) * num3) < 50){
      reject(new Error('Valor muito baixo'))
    }

    const value = (num1 + num2) * num3;

    resolve(value);
  });

  return promise;
}

/* func(A, B, C)
  .then((result) => console.log(`Value: ${result}`))
  .catch((err) => console.log(`Erro: ${err.message}`)) */

  const other = async () => {
    const array = [A, B, C];
    console.log(array);
    const random = array.map((number) => number);
    const result = await func(...random);
    console.log(result);
  }

  other();
