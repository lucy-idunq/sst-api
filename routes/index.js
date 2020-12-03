const express = require('express');
const loginRoute = require('./loginRoute');
const userRoute = require('./userRoute');
const itemRoute = require('./itemRoute');


const router = express.Router();

router.use('/login',loginRoute);

router.use('/users',userRoute);

router.use('/items',itemRoute);

module.exports = router;