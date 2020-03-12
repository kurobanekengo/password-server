
const express = require('express');
const server = express();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.get('/passwords', (req, res) => {
  res.send('Hello World!');
});
server.listen(3000, () =>{});