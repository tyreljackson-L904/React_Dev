const express = require('express');

const { signup, login } = require('../controllers/auth.js');

const router = express.Router(); // create a router instance

router.post('/signup', signup); // function located in authController

router.post('/login', login); // function located in authController

module.exports = router;