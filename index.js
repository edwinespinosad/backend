'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/tienda').
    then(() => {
        console.log('Conectado a la base de datos');
        // Creacion del servidor
        app.listen(port, () => {
            console.log('Servidor corriendo en http://localhost/:' + port);
        });
    }).catch(err => console.log(err));