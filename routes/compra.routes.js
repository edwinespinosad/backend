const { Router } = require('express');
const router = Router();

const purchaseCtrl = require('../controllers/compra.controller.js');

router.get('/getCompras/:correo', purchaseCtrl.getCompras);
router.get('/getComprasId/:id', purchaseCtrl.getComprasId);
router.post('/addCompra', purchaseCtrl.addCompra);
router.get('/getCompras', purchaseCtrl.getAllCompras);

module.exports = router;