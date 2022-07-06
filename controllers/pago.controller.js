const ctrlPago = {};

const Pago = require('../models/Pago');

ctrlPago.addMetodoPago = async (req, res) => {
    const newPago = new Pago(req.body);
    await newPago.save();
    res.send({ message: 'Metodo de Pago creado' });
}

module.exports = ctrlPago;