const mongoose = require("mongoose");

const asignaturaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }, numnotas: {
        type: Number
    }
    
});


module.exports = mongoose.model('asignaturas', asignaturaSchema);