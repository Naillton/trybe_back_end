const calculaDiv = (num1, num2) => {
  const promise = new Promise((resolve, reject) => {
    num2 == 0 && reject(new Error('Não poemos dividir um numero por 0'))

    const result = num1 / num2;

    resolve(result);
  });

  return promise;
}

calculaDiv(10, 0)
  .then((result) => console.log(`O resultado da divisão é ${result}`))
  .catch((err) => console.log(`Uma ameaça foi detectada, ${err.message}`))