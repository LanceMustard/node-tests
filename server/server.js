const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'ToDo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
      name: 'Lance Mustard',
      age: 41
    },
    {
      name: 'Fred Flinstone',
      age: 34
    },
    {
      name: 'Homer Simpson',
      age: 39
    }
  ]);
});

app.listen(3000);

module.exports.app = app;