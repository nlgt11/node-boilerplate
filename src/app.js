const express = require('express');

const app = express();

app.get('/', (_, res) => {
  res.send('Hello world');
});

module.exports = app;
