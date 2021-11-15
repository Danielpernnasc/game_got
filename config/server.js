/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');


/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/**importar o módulo de express-session */
var expressSession = require('express-session');



/* iniciar o objeto do express */
var app = express();

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware express.static */
app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(express.urlencoded({extended: true}));

/* configurar o middleware express-validator */
app.use(expressValidator());

/** configura o middleware o express-session */
app.use(expressSession({
	secret: 'fhgfhdgfdgf',
	resave: Boolean,
	saveUninitialized: Boolean
}));

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

/* exportar o objeto app */
module.exports = app;