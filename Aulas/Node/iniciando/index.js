const { brl, usdToBrl} = require('./brlValue');

console.log(`Valor do dólar: ${ brl }`);
console.log(`10 dolares são exatamente ${ usdToBrl(10) } reais`);