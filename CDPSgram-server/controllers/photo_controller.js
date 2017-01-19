var fs = require('fs');
var models = require('./../models');

// Devuelve una lista de las imagenes disponibles y sus metadatos
exports.list = function(req, res) {
    console.log("list");

    models.Photo.find({}, function(err, photos) {
        res.render('photos/index', {
            photos: photos
        });
    });
};

// Devuelve la vista del formulario para subir una nueva foto
exports.new = function(req, res) {
    console.log("new");

    res.render('photos/new');
};

// Devuelve la vista de visualización de una foto.
// El campo photo.url contiene la url donde se encuentra el fichero de audio
exports.show = function(req, res) {
    console.log("show");

    models.Photo.findOne({
        _id: req.params.photoId
    }, function(err, photo) {
        res.render('photos/show', {
            photo: photo
        });
    });
};

// Escribe una nueva foto en el registro de imagenes.
exports.create = function(req, res) {
    console.log("create");

    var photo = req.files.photo;
    console.log('Nuevo fichero: ', req.body);
    var name = req.body.name;
    var url = req.body.url;

    new models.Photo({
        name: name,
        url: url
    }).save(function(err) {
        if (!err) {
            res.redirect('/photos');
        }
    })
};

// Borra una foto (photoId) del registro de imagenes
exports.destroy = function(req, res) {
    console.log("destroy");
    models.Photo.remove({
        _id: req.params.photoId
    }, function(err, photo) {
        res.redirect('/photos');
    });
    // Aquí debe implementarse el borrado del fichero de audio indetificado por photoId en photos.cdpsfy.es
};
