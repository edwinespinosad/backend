const { Router } = require('express');
const router = Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'});

const articuloCtrl = require('../controllers/articulos.controller.js');

router.get('/', articuloCtrl.getArticulos);
router.post('/addArticulo', articuloCtrl.createArticulo);
router.get('/:id', articuloCtrl.getArticulo);
router.post('/upload-image/:id', multipartMiddleware, articuloCtrl.uploadImage);
router.get('/get-image/:image', articuloCtrl.getImageFile);
// router.get('/tema/:categoriaID', bookCtrl.getBooksByCategory);
// router.get('/libro/:id', bookCtrl.getBook);
router.delete('/delete/:id', articuloCtrl.deleteArticulo);
router.put('/update/:id', articuloCtrl.updateArticulo);


module.exports = router;