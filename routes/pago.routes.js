const { Router } = require('express');
const router = Router();

const pagoCtrl = require('../controllers/pago.controller.js');

router.post('/addMethod', pagoCtrl.addMetodoPago);

module.exports = router;