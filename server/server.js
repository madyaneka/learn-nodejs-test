const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Mike',
    age: 27
  }, {
    name: 'Madyan',
    age: 23
  }, {
    name: 'Jessica',
    age: 23
  }]);
});

app.listen(3000);
module.exports.app = app;
