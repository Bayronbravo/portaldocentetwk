const studentService = require("../services/studentService");


const editFecha = async (req, res) => {
    const { id } = req.params;
    const { _id } = req.body;
        try {
        const student = await studentService.putStudentById(
            id,
            { "$push" : {"asignaturas.$[i].asistencia" : new Date()} },
            {"arrayFilters" :[ { "i._id" : _id} ], new : true});
    res.send(student);
}
catch (error) {
    console.log(error);
};
}




module.exports = {
    editFecha,
}
