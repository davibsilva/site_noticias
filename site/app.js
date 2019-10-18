// Importando as configurações do servidor, view engine, middlewares e autoload
var app = require('./config/server');

//definindo porta de escuta
app.listen(3000, function(){
	console.log('Servidor ON');
});