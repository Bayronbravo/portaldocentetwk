const studentService = require("../services/studentService");

const getStudents = async (req, res) => {
    const students = await studentService.getStudents(req, res);
    console.log(students)
    res.send(students);
};

const putStudents = async (req, res) => {
    const notas = await studentService.putStudentByNotas(req, res);
    console.log(notas)
    res.send(notas);
}

module.exports = {
    getStudents,
    putStudents
}