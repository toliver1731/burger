var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var app = express();



var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))





// Handlebars
app.engine('handlebars', exphbs({ 
	defaultLayout: 'main' 
}));
app.set('view engine', 'handlebars');

// Method Override	
app.use(methodOverride('_method'));



var router = require('./controllers/burgers_controllers.js');
app.use('/', router);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT)
});

