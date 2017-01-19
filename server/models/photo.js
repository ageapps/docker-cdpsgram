/*

Modelo de datos de canciones (photo)

photo_id: {
	name: nombre de la canción,
	url: url del fichero de audio
}

*/
module.exports = function(mongoose) {
    const photoSchema = mongoose.Schema({
        name: String,
				url: String
    }, {
        timestamps: true
    });
    return photoSchema;
}


var photos_url = process.env.PHOTOS_URL || "http://localhost:8000"
