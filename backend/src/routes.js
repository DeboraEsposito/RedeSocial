const express = require('express');

//a partir daqui podemos importar as rotas
const routes = new express.Router();

//get acessa a rota pelo navegador
//função midleeware em express recebe req e res e retorna alguma coisa
routes.get('/', (req, res)=>{
  //res.send envia uma resposta
  //recebe resposta de paramentro da url 
  return res.send(`Olá, ${req.query.name}`);
});

module.exports = routes;
