const express = require('express');
const router = express.Router();


const diagnosis = require('./diagnosis.js');
//-----add-----

router.use('/dx', diagnosis);
//-----add-----


module.exports = router;