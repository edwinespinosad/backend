const { Router } = require('express');
const router = Router();

const carritoCtrl = require('../controllers/carrito.controller.js');

router.get('/', carritoCtrl.getCarritos);
router.get('/:id', carritoCtrl.getCarrito);
router.post('/add', carritoCtrl.addACarrito);
router.put('/:id', carritoCtrl.updateCarrito);
router.delete('/:id', carritoCtrl.deleteArticuloCarrito);
router.delete('/deleteCarrito/:id', carritoCtrl.deleteCarrito);

module.exports = router;