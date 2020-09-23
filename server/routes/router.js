const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('hello there, GENERAL KENOBY'));

module.exports = router;
