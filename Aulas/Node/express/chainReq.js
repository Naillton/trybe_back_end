const express = require('express');
const App = express();

App.route('/')
  .get((req, resp) => {
    resp.send('Hello GET');
  })
  .post((req, resp) => {
    resp.send('Hello POST');
  });

App.listen(3001, () => {
  console.log('Example app listening on port 3001 METHOD GET POST');
});