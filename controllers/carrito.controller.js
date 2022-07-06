const carritoCtrl = {};

const Cart = require('../models/Carrito');

carritoCtrl.addACarrito = async (req, res) => {
    console.log(req.body);
    const newCart = new Cart(req.body);
    await newCart.save();
    res.send({ message: 'Carrito guardado' });
}

carritoCtrl.getCarritos = async (req, res) => {
    const carritos = await Cart.find();
    res.json(carritos);
}

carritoCtrl.getCarrito = async (req, res) => {
    const { id } = req.params;
    const cart = await Cart.find({usuarioId: id});
    res.json(cart);
}

carritoCtrl.updateCarrito = async (req, res) => {
    const { id } = req.params;
    const filter = {_id: id}
    const cart = {
        cantidad: req.body.cantidad,
    };
    
    await Cart.findOneAndUpdate(filter, cart, {new: true});
    res.json({ status: 'Carrito actualizado' });
}

carritoCtrl.deleteCarrito = async (req, res) => {
    const { id } = req.params;
    await Cart.findOneAndRemove(id);
    res.json({ status: 'Carrito eliminado' });
}

carritoCtrl.deleteArticuloCarrito = async (req, res) => {
    const { id } = req.params;
    await Cart.findOneAndRemove({articuloId: id});
    res.json({ status: 'Articulo eliminado' });
}



module.exports = carritoCtrl;