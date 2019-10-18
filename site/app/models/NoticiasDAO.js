// Esse módulo é resposável por exportar nosso sql 
function NoticiasDAO(connection){
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){ // query consulta noticias
	this._connection.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){ // query consulta noticia por ID
	console.log(id_noticia.id_noticia);
	this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){ // query inserir noticia no banco
	this._connection.query('insert into noticias set ? ', noticia, callback)
}

NoticiasDAO.prototype.getUltimasNoticias = function(callback){ // query selecionar ultimas notícias
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function(){
	return NoticiasDAO;
}