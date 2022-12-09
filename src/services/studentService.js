const alumnosSchema = require("../models/alumnos");



const getStudents = async (req, res) => {
    return await alumnosSchema.find();
};

const putStudentById = async (id, b, c) => {
    return await alumnosSchema.findByIdAndUpdate(id, b, c);
};

/* const putStudentByNotas = async (id, notas) => {
    return await alumnosSchema.findByIdAndUpdate(id, notas);
} */


module.exports = {
    getStudents,
    putStudentById
};
