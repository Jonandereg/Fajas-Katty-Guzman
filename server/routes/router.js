const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', (req, res) => res.send('hello there, GENERAL KENOBY'));
router.post('/register', customerController.register);

module.exports = router;
