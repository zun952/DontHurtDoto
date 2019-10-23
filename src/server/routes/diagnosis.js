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

//진료기록 상세보기
router.get('', function(req, res){
    con.query('select ' +
    'dx.diagnosis_date' +
    ', dx.clinic_code' +
    ', c.clinic_name' +
    ', dx.pet_id' +
    ', p.pet_name' +
    ', dx.diagnosis_name' +
    ', dx.sick_date' +
    ', dx.diagnosis_symptom' +
    ', dx.diagnosis_prognosis' +
    ', dx.diagnosis_cost ' +
    'from diagnosis dx ' +
    'join pet p ' +
    'on dx.pet_id = p.pet_id ' +
    'join clinic c ' +
    'on dx.clinic_code = c.clinic_code ' +
    'where diagnosis_id = ' + req.query.dx_id,  function(err, rows){
        if(err) { 
            return res.send(err);
        } else{
            return res.json(rows);
        }       
    });
});

//날짜별 진료기록 목록보기
router.get('/list', function(req, res){
    con.query('select ' +
		'dx.diagnosis_date' +
		', p.pet_name' +
        ', c.clinic_name' +
        ', dx.diagnosis_name' +
        ', dx.diagnosis_id ' +
        'from 	diagnosis dx ' +
        'join 	pet p ' +
        'on  	dx.pet_id = p.pet_id ' +
        'join	clinic c ' +
        'on		dx.clinic_code = c.clinic_code ' +
        'where 	1 = 1 ' +
        'and	dx.user_id = ' + req.query.user_id + ' ' +
        'and    dx.diagnosis_date <= date_add(\'' + req.query.dx_date + '\', interval +1 day) ' +
        'and    dx.diagnosis_date > \'' + req.query.dx_date + '\'' +
        ';', function(err, rows){
                if(err) { 
                    return res.send(err);
                } else{
                    return res.json(rows);
            }   
    });
});

//진료기록 수정하기
router.put('/mod', function(req, res){
    con.query('update diagnosis set diagnosis_date = \'' + req.body.diagnosis_date +
    '\', clinic_code = \'' + req.body.clinic_code +
    '\', pet_id = \'' + req.body.pet_id +
    '\', diagnosis_name = \'' + req.body.diagnosis_name +
    '\', sick_date = \'' + req.body.sick_date +
    '\', diagnosis_symptom = \'' + req.body.diagnosis_symptom +
    '\', diagnosis_prognosis = \'' + req.body.diagnosis_prognosis +
    '\', diagnosis_cost = \'' + req.body.diagnosis_cost +
    '\' where diagnosis_id = \'' + req.body.dx_id + '\'', function(err, rows){
        if(err){
            return res.send(err);
        } else{
            return res.json(rows);
        }
    });
});

//새 진료기록 쓰기
router.post('/post', function(req, res){
    con.query('insert into diagnosis(user_id, pet_id, clinic_code, diagnosis_date, ' +
    'diagnosis_name, sick_Date, diagnosis_symptom, diagnosis_prognosis, diagnosis_cost)' +
    'values(\'' + req.body.user_id + '\', \'' + req.body.pet_id + '\', \'' +
    req.body.clinic_code  + '\', \'' + req.body.diagnosis_date  + '\', \'' + 
    req.body.diagnosis_name  + '\', \'' + req.body.sick_date  + '\', \'' + 
    req.body.diagnosis_symptom  + '\', \'' + req.body.diagnosis_prognosis + '\', \'' + 
    req.body.diagnosis_cost + '\')', function(err, rows){
        if(err){
            return res.send(err);
        } else{
            return res.json(rows);
        }
    });
});

module.exports = router;