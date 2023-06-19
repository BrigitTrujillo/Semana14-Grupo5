const mongoose = require('mongoose');

const VueloSchema = mongoose.Schema({
    
    num_vuelo: {
        type: String,
        require: true
    },
    origen: {
        type: String,
        require: true
    },
    destino: {
        type: String,
        require: true
    },
    hora: {
        type: String,
        require: true
    },
    fecha: {
        type: String,
        require: true
    },
    piloto: {
        type: String,
        ref: 'Piloto',
        require: true
    },
    avion: {
        type: String,
        ref: 'Avion',
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Vuelo', VueloSchema)