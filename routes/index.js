const express = require('express');
const router = express.Router();

const estudiante = require('../controllers/estudiante');
const Materia = require('../controllers/materia');
const Aula = require('../controllers/aula');
const Horario = require('../controllers/horario');




module.exports = app => {

    //Estudiante
    router.get('/getEstudiantes/:nombre?', estudiante.getEstudiantes);
    router.get('/getPerfilEstudiante/:id?', estudiante.getEstudiante);
    router.post('/addEstudiante', estudiante.addEstudiantes);
    router.put('/UpdateEstudiante/:id', estudiante.UpdateEstudiantes);

    //Materia
    router.get('/getMaterias:nombre?', Materia.getMaterias);
    router.post('/addMateria', Materia.addMaterias);
    router.put('/UpdateMateria/:id', Materia.UpdateMaterias);


    //Aula
    router.get('/getAulas:nombre?', Aula.getAulas);
    router.post('/addAula', Aula.addAulas);
    router.put('/UpdateAula/:id', Aula.UpdateAulas);


    //Horario
    router.get('/getHorarios:nombre?', Horario.getHorarios);
    router.post('/addHorario', Horario.addHorario);
    router.put('/UpdateHorario/:id', Horario.UpdateHorario);


    app.use(router)

}