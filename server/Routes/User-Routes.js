const express = require('express');
const { getUser, loginUser } = require('../Controllers/User-Controllers');
const router = express.Router();

router.post('/register', getUser);
router.post('/login', loginUser)

module.exports = router;
