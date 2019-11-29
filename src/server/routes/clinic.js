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
	con.query('select * ' +
			'from clinic ' +
			'where clinic_name like \'%' + req.query.clinic_name + '%\'', function(err, rows){
					if(err){
							return res.send(err);
					} else{
							return res.json(rows);
					}
			}
	);
});

module.exports = router;
