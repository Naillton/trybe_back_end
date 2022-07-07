const express = require('express'); // criado constante que recebe o express

const App = express(); // criando constante App que tera as propriedades do express

App.get('/hello', handleHelloWorldRequest); // utilizando o metodo get e passando um url de acesso e a funcao que devera ser chamada

//App.get('/hello', (req, res) => {
 // res.status(200).send('Hello World!');
//});

App.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001'); // utiliando listen para criar conexão com a porta 3001
});

function handleHelloWorldRequest(req, res){
  res.status(200).send('Hello World!, com nodemon');
}
// criando a funcao definida no metodo get e passando para ela dois parametros
// um de requisicao e o outro de resposta, usamos o parametro de resposta para enviar um status da requisicao