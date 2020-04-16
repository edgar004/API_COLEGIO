const express = require('express');
const router = express.Router();

const estudiante = require('../controllers/estudiante');
const Materia = require('../controllers/materia');


module.exports = app => {

    //Estudiante
    router.get('/getEstudiantes', estudiante.getEstudiantes);
    router.post('/addEstudiante', estudiante.addEstudiantes);
    router.put('/UpdateEstudiante/:id', estudiante.UpdateEstudiantes);

    //Materia
    router.get('/getMaterias', Materia.getMaterias);
    router.post('/addMateria', Materia.addMaterias);
    router.put('/UpdateMateria/:id', Materia.UpdateMaterias);


    app.use(router)

}