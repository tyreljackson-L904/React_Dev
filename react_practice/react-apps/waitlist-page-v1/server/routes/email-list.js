const express = require('express');

const {emailRoute} = require('../db/conn')

const router = express.Router();

router.post('/email-list')

module.exports = router;