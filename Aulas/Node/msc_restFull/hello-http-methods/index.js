const fetch = require('node-fetch');

const API_TOKEN = '1kuiuuy2837y823gy6828g';

const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  // precisamos adcionar um Content-type: application/json para conseguirmos enviar um body para a nossa api
  'Content-type': 'application/json',
});

const body = JSON.stringify({
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'Tr1b3r'
});

fetch('https://postman-echo.com/post?param1=teste',
  {
    headers,
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((errorOrResponse) => {
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    console.error(errorOrResponse);
  })