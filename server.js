var express = require('express'),
	app = express(),
	path = require('path');

app.use(express.static(path.join(__dirname, 'client')));
app.set('views', __dirname + '/client/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// ROUTES

app.get('/', function(req, res){
	res.render('index.html');
});

app.get('/bridalparty', function(req, res){
	res.render('bridalparty.html');
});

// RUN SERVER

app.listen(8000, function(){
	console.log('server is running');
});
