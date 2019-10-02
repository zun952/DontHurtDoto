var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var cors = require('cors')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())


var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "zun952",
    password: "tlsehdals11",
    database: "doto",
    connectTimeout: 20
})

con.connect()

app.set('port', process.env.POST || 8080)

app.get('/dx', function(req, res){
    con.query('select * from diagnosis where diagnosis_id = ' + req.query.dx_id,  function(err, rows){
        if(err) { 
            res.send(err)
        } else{
            res.json(rows)
        }       
    })
})

app.get('/dx/list', function(req, res){
    con.query('select diagnosis_date, pet_id, diagnosis_name, clinic_code from diagnosis where user_id = \'' + req.query.user_id + '\'', function(err, rows){
        if(err) { 
            res.send(err)
        } else{
            res.json(rows)
        }   
    })
})

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});


/*
//select
con.connect(function(err){
    if(err){ return console.log("error: " + err.message); }
    console.log("Connected")

    sql = "SELECT * FROM diagnosis";

    con.query(sql, function(err, results, fields){
        if(err){ return console.log("error : " + err.message); }

        console.log(results);
        for(var i = 0; i < fields.length; i++){
            for(var keyNm in results[i]){
                console.log(keyNm + ": " + results[i][keyNm])
            }
        }
    })

    con.end(function(err){
        if(err){ return console.log("error : " + err.message); }
        console.log("Disconnected")
    });
});
*/