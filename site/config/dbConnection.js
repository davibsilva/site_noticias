var mysql = require('mysql'); // importando modulo mysql

var connMySQL = function(){ // criando função de conexão ao banco e atribuindo a uma variável
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '1234',
		database : 'portal_noticias'
	});
}

module.exports = function () { // exportando a função e retornando nossa variável para que não fique criando infinitas conexões
	return connMySQL; 
}