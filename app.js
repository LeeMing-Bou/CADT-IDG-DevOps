// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('I AM JUST A CHILL GUY WITH AN UNCOUNTABLE PROBLEMS!!!');
});

app.get('/user/:id', (req, res) => {
  res.status(200).json({ id: req.params.id });
});

module.exports = app;