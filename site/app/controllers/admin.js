module.exports.formulario_inclusao_noticia = function(application, req, res){
	res.render("admin/form_add_noticia", {validacao : {}, noticia : {}}); //exportando função que renderiza a view de inclusao e as variáveis que estão sendo usadas no ejs para tornar a página dinâmica
}

module.exports.noticias_salvar = function(application, req, res){ // função adicionar noticia
	var noticia = req.body; // atribuindo a variável o corpo da requisição

	req.assert('titulo','Título é obrigatório').notEmpty(); // Validação de formulário campo não pode ser vazio
	req.assert('resumo','Resumo é obrigatório').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100); // validando tamanho
	req.assert('autor','Autor é obrigatório').notEmpty(); 
	req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
	req.assert('noticia','Noticia é obrigatório').notEmpty();

	var erros = req.validationErrors(); // atribuindo a variável erros caso ocorra algum erro de validação

	if(erros){ // se tiver erro, renderizar a página novamente, só que com os erros
		res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
		return;
	}

	var connection = application.config.dbConnection(); // exportando a conexão com o banco e atribuindo a connection
	var noticiasModel = new application.app.models.NoticiasDAO(connection); // criando nova instancia de NoticiasDAO

	noticiasModel.salvarNoticia(noticia, function(error, result){ // Pegando o método salvarNoticia do objeto, e após salvar a notícia, redirecionar a página inicial
		res.redirect('/noticias');
	});	
}