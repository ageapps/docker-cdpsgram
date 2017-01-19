'use strict';

var mongoose = require('mongoose');



// MongoDB Connection
mongoose.connect('mongodb://db:27017');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB");
});


var photoSchema = require('./photo')(mongoose);


// find foto by name
photoSchema.statics.findByName = function(name, cb) {
    return this.findOne({
        name: name
    }, cb);
};



var Photo = mongoose.model('Photo', photoSchema);


var photos_url = process.env.PHOTOS_URL || "http://localhost:8000"

const initialPhotos = [{
        name: 'Wood',
        url: photos_url + '/photos/photo1.jpg'
    },
    {
        name: 'Desktop',
        url: photos_url + '/photos/photo2.jpg'
    },
    {
        name: 'Man',
        url: photos_url + '/photos/photo3.jpg'
    },
    {
        name: 'Woman',
        url: photos_url + '/photos/photo4.jpg'
    },
    {
        name: 'People',
        url: photos_url + '/photos/photo5.jpg'
    }
];

Photo.findOne({
  name: 'People'
}, function(err, photo) {
    if (!photo ) {
      console.log("DB Empty");
      Photo.insertMany(initialPhotos, function(err, small) {
          if (err) return handleError(err);
          console.log("Initial Fotos Saved");
      });
    } else {
      console.log("DB already populated");
    }
});
function populateDB(){

}



exports.Photo = Photo;
