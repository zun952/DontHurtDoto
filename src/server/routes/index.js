const express = require('express');
const router = express.Router();


const diagnosis = require('./diagnosis.js');
const pet = require('./pet.js');
//-----add-----

router.use('/dx', diagnosis);
router.use('/pet', pet);
//-----add-----


module.exports = router;