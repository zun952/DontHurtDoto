const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());

//DB connection
mysql = require('mysql');
var con = mysql.createConnection(require('../dbconfig'));
con.connect();

router.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});


////api

//펫 목록
router.get('/list', function(req, res){
    con.query('select ' +
	'pet_id' +
    ', pet_name' +
    ', user_id ' +
    'from pet ' +
    'where user_id = ' + req.query.user_id, function(err, rows){
        if(err){
            return res.send(err);
        } else{
            return res.json(rows);
        }
    });
});

module.exports = router;