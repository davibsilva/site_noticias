// importando os modulos necessários
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express(); // inicializando o objeto express
app.set('view engine', 'ejs'); // definindo ejs como motor de renderização
app.set('views', './app/views'); // definindo onde ficarão nossas views

app.use(express.static('./app/public')); // estamos dizendo ao express onde encontrar nossos arquivos estaticos
app.use(bodyParser.urlencoded({extended: true}));  // com extended true podemos utilizar json 
app.use(expressValidator()); // definindo middleware de autenticação

consign() // definindo o autoload para conexão com o banco, nossas rotas models e controllers
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app; // Exportando app com todas nossas configurações