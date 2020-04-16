const {
    model,
    Schema
} = require('mongoose');

var estudianteSchema = new Schema({
    nombre_completo: {
        type: String,
        required: true
    },
    nombre_padre: {
        type: String,
        required: true
    },
    nombre_madre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        default: new Date(),
        required: true
    },
}, {
    collection: "estudiante"
})

module.exports = model('estudiante', estudianteSchema);