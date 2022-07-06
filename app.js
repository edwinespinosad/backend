'use strict'
// const Book = require('../models/Books.js');
var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

// cargar archivos rutas
var articulo_routes = require('./routes/articulos.routes.js');
var carrito_routes = require('./routes/carrito.routes.js');
var login_routes = require('./routes/users.routes.js');
var compra_routes = require('./routes/compra.routes.js');
var pago_routes = require('./routes/pago.routes.js')
// middlewares
// app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar cabeceras y cors

// Rutas
app.use('/api/articulos', articulo_routes);
app.use('/api/carrito', carrito_routes);
app.use('/api/login', login_routes);
app.use('/api/compras', compra_routes);
app.use('/api/pago',pago_routes);
// Exportar
module.exports = app;