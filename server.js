var express = require('express'),
	app = express(),
	path = require('path');

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function(req, res){
	res.render('index');
});

app.listen(8000, function(){
	console.log('server is running');
});
