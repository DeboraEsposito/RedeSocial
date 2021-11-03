//importa a biblio express para a variável express
const express = require('express');
//mongoose biblio para manipular dados mongo db na aplicação
const mongoose = require('mongoose');

//Retornar o express dentro da função app cria uma espécie de servidor na aplicação
const app = express();

//conectar com o bd
mongoose.connect('mongodb+srv://semana:semana@cluster0.y23xx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
})

app.use(require('./routes'));
//***funções do CRUD***
//get busca info
//post cadastra info
//put edita info
//delete deleta info

//Listen 'ouve' a porta do navegador
app.listen(3333)

