/* const studentService = require("../services/studentService");

const addNota = async (req, res) => {
    const { id } = req.params;
    const { idAsignatura, nota } = req.body;

    try {
        const student = await studentService.putStudentById(id, {
            "nombre":"(nombre del alumno)",
            "nlista":"(numero de lista)",
            "asignaturas":[{
                "_id":"6387f6f027792a593fb5de32"
                },
                {
                "_id":"6387f71927792a593fb5de36"
                },
        
                {
                "_id":"6387f73427792a593fb5de3a"
                },
        
                {
                "_id":"6387f75c27792a593fb5de41",
                
                "notas":[{
                    "_id":"6387b91c6c0855df64b2837a"
                }],
                "asistencia":[{
                    "_id":"6387cc92627310686c07b385"
                }]    
            }]
        });


const editNota = async (req, res) => {
    const { id } = req.params;
    const { idAsignatura, notas } = req.body;
        try {
        const student = await studentService.putStudentByNotas(id, {
        "nombre": "(nombre alumno)",
        "nlista":"(numero de lista)",
        "asignaturas":[{
            "_id":"(Id asignatura)",
            "notas":[
                "(0.0)",
                ],
            "asistencia":[
                "(0000-00-00 00:00:00)",
            ]}
        ]});} 

catch (error) {
    console.log(error);
};





module.exports = {
    addNota,
    editNota
} */