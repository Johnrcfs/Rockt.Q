// Reponsavel por inicar o servidor
const express = require('express');
const route = require('./routes');
const path = require('path');

const server = express();

server.set('view engine', 'ejs');

server.use(express.static("public"));

server.set('views', path.join(__dirname, 'views'));

//mideweller
server.use(express.urlencoded({ extended: true }));

server.use(route);

server.listen(3333, () => console.log(' Rodando '));