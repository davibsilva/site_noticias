module.exports.noticias = function(application, req, res){
	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection); // instanciando nossa classe de query

	noticiasModel.getNoticias(function(error, result){ // usando método com nossa query que dá select em todas as notícias
		res.render("noticias/noticias", {noticias : result}); // renderizando a página
	});	
}

module.exports.noticia = function(application, req, res){ // função para renderizar apenas uma notícia
	var connection = application.config.dbConnection(); // importando conexão com o banco
	var noticiasModel = new application.app.models.NoticiasDAO(connection); /// instanciando a classe das querys

	var id_noticia = req.query; // id_noticia vai pegar o que vem depois de "?"" na URL

	noticiasModel.getNoticia(id_noticia, function(error, result){
		res.render("noticias/noticia", {noticia : result});
	});	
}