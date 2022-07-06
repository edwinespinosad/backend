const ctrlCompra = {};

const Compra = require('../models/Compra');

ctrlCompra.addCompra = async (req, res) => {
    const newCompra = new Compra(req.body);
    await newCompra.save();
    res.send({ message: 'Compra successfully' });
}
ctrlCompra.getCompras = async (req, res) => {
    const { correo } = req.params;
    const compras = await Compra.find({usuarioId: correo});
    res.json(compras);
}

ctrlCompra.getComprasId = async (req, res) => {
    const { id } = req.params;
    const compra = await Compra.find({compraId: id});
    res.json(compra);
}

ctrlCompra.getAllCompras = async (req, res) => {
    const compras = await Compra.find();
    res.json(compras);
}

module.exports = ctrlCompra;
