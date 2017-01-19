var express = require('express');
var path = require('path');
var fs = require('fs');
var multer = require('multer');

var app = express();

var media_path = __dirname + '/media/';

var port = parseInt(process.env.PORT || '8000', 10);
app.listen(port);

app.use(function (req, res, next) {
    "use strict";
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'HEAD, PUT, POST, GET, OPTIONS, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    if (req.method == 'OPTIONS') {
        res.statusCode = 200;
        res.header('Content-Length', '0');
        res.send();
        res.end();
    }
    else {
        next();
    }
});

app.get('/', function(req,res){
	res.send('DCPSgram-photos REST Service\n');
})

//Devuelve la imagen pedida
app.get('/photos/:photoId', function(req,res){
	console.log("Getting photo ", req.params.photoId)
	file = media_path + req.params.photoId;
	res.sendFile(file)
});


//Guarda la imagen subida
app.post('/photos', multer({ dest: media_path }), function(req, res) {
	var name = req.files.photo.name;
	console.log('Creating foto', name);
	var url = '/photos/' + name;
    res.status(200).send(url);
});

//Elimina la imagen especificada
app.delete('/photos/:photoId', function(req,res){
	var id = req.params.photoId;
	console.log("Delete photo", id);
	p = media_path + id; 
	fs.unlinkSync(p);
	res.status(200).send('Deleted');
});