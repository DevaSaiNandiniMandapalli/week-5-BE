const express = require('express');
const userController = require('../controllers/usercontroller');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
