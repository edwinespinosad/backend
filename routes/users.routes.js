const { Router } = require('express');
const router = Router();

const loginCtrl = require('../controllers/login.controller.js');

router.get('/', loginCtrl.getUsers);
router.post('/new', loginCtrl.createUser);
router.get('/:email', loginCtrl.getUser);
router.put('/:id', loginCtrl.updateUser);
router.delete('/:id', loginCtrl.deleteUser);

module.exports = router;
