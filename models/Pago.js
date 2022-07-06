const { Schema, mongoose } = require('mongoose');

const paymentSchema = new Schema({
    usuarioId: { type: String },
    numeroTarjeta: { type: String, required: true },
    mm: { type: String, required: true },
    yy: { type: String, required: true },
    cvc: { type: String, required: true },
    nombreTarjeta: { type: String, required: true },
    total: { type: Number, required: true },
    calle: { type: String, required: true },
    ciudad: { type: String, required: true },
    estado: { type: String, required: true },
    cp: { type: String, required: true }
});

module.exports = mongoose.model('Payment', paymentSchema);