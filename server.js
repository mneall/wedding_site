var express = require('express'),
	app = express(),
	path = require('path');

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.set('views', __dirname + '/client/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// ROUTES

app.get('/', function(req, res){
	res.render('index.html');
});

app.get('/rsvp', function(req, res){
	res.render('rsvp.html');
});

// RUN SERVER

app.listen(9000, function(){
	console.log('server is running');
});
