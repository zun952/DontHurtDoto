const express = require('express');
const router = express.Router();

//DB connection
mysql = require('mysql');
var con = mysql.createConnection(require('../dbconfig'));
con.connect();

//api
router.get('', function(req, res){
    con.query('select * from clinic where clinic_code = \'' + req.query.clinic_code + '\'',  function(err, rows){
        if(err) { 
            return res.send(err);
        } else{
            return res.json(rows);
        }       
    });
});

// router.get('/list', function(req, res){
//     con.query('select diagnosis_date, pet_id, diagnosis_name, clinic_code from diagnosis where user_id = \'' + req.query.user_id + '\'', function(err, rows){
//         if(err) { 
//             return res.send(err);
//         } else{
//             return res.json(rows);
//         }   
//     });
// });

module.exports = router;