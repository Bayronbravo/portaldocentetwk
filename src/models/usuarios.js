const mongoose = require("mongoose");
const asignaturas = require("./asignaturas");

const userSchema = mongoose.Schema({
    rut: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    asignaturas:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'asignaturas',
            autopopulate: true,
        },
    ]

});


userSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('user', userSchema);