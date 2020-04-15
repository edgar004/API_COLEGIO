const morgan = require('morgan');
const express = require('express');

const routes = require('../routes/index');
module.exports = app => {

    //Settings
    app.set('port', process.env.PORT || 3000);

    //midleware
    app.use(morgan('dev'));
    app.use(express.urlencoded({
        extended: false
    }));
    app.use(express.json());

    //routes
    routes(app);
    return app;
}