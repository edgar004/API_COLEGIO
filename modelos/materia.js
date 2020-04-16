const {
    model,
    Schema
} = require('mongoose');


var materiasSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
}, {
    collection: "materias"
});


module.exports = model('materias', materiasSchema);