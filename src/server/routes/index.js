const express = require('express');
const router = express.Router();

const diagnosis = require('./diagnosis.js');
const pet = require('./pet.js');
const clinic = require('./clinic.js');
//-----add-----

router.use('/dx', diagnosis);
router.use('/pet', pet);
router.use('/clinic', clinic);
//-----add-----

const clinic = require('./clinic.js');

router.use('/clinic', clinic);

module.exports = router;
