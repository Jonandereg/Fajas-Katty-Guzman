const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const adminController = require('../controllers/adminController');

router.get('/users', adminController.getUsers);
router.put('/users/:uid', adminController.updateUser);
router.delete('/delete/:uid', adminController.deleteUser);
router.post('/register', customerController.register);
router.post('/login', customerController.login);
router.put('/:uid', customerController.updateUser);

module.exports = router;
