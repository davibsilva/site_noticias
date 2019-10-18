module.exports.index = function(application, req, res){ // exportando controller da página index

	var connection = application.config.dbConnection(); // exportando nossa conexão com o banco 
	var noticiasModel = new application.app.models.NoticiasDAO(connection); // instanciando nossa classe Noticias DAO

	noticiasModel.getUltimasNoticias(function(error, result){ // usando o método da instancia noticiasModel para dar select das últimas notícias
		res.render("home/index", {noticias : result});	// result é a consulta no banco
	});

	
}