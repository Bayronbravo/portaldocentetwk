const mongoose = require("mongoose");


const alumnosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    nlista: {
        type:String,
        required: true,
    },
    asignaturas: [{
        _id: String,
        notas: [String],
        asistencia: [Date]
    }],
    
    
});


module.exports = mongoose.model('Alumno', alumnosSchema);
