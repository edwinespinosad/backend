const { Schema, mongoose } = require('mongoose');

const purchaseSchema = new Schema({
    usuarioId: { type: String, required: true },
    pagoId: { type: String, required: true },
    articuloId: { type: String, required: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true },
    nombreArticulo: { type: String, required: true },
    imagen: { type: String, required: true },
    fecha: { type: Date, required: true },
    total: { type: Number, required: true },
    compraId: { type: String},
});

module.exports = mongoose.model('Purchase', purchaseSchema);