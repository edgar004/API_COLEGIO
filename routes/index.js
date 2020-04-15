const express = require('express');
const router = express.Router();

const estudiante = require('../controllers/estudiante')

module.exports = app => {

    router.get('/', estudiante.index);

    app.use(router)

}