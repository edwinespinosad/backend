const { Schema, model } = require('mongoose');

const carritoSchema = new Schema({
    usuarioId: { type: String, required: true },
    articuloId: { type: String, required: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true },
    nombreArticulo: { type: String, required: true },
    imagen: { type: String, required: true },
    compraId : { type: String},
});

module.exports = model('Carrito', carritoSchema);