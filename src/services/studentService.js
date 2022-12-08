const alumnosSchema = require("../models/alumnos");



const getStudents = async (req, res) => {
    return await alumnosSchema.find();
};

const putStudentById = async (id, b) => {
    return await alumnosSchema.findByIdAndUpdate(id, b);
};

const putStudentByNotas = async (id, notas) => {
    return await alumnosSchema.findByIdAndUpdate(id, notas);
}


module.exports = {
    getStudents,
    putStudentByNotas
};
