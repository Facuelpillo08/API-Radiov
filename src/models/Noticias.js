const {Schema, model} = require('mongoose');

const NoticiasEsquema = new Schema({
    autor: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});


module.exports = model('noticias', NoticiasEsquema, 'noticias');