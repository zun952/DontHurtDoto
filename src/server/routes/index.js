const express = require('express');
const router = express.Router();

const diagnosis = require('./diagnosis.js');
//-----add-----

router.use('/dx', diagnosis);
//-----add-----

const clinic = require('./clinic.js');

router.use('/clinic', clinic);

module.exports = router;