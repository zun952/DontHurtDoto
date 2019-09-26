var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "zun952",
    password: "tlsehdals11",
    database: "doto",
    connectTimeout: 20
});

//select
con.connect(function(err){
    if(err){ return console.log("error: " + err.message); };
    console.log("Connected");

    sql = "SELECT * FROM diagnosis";

    con.query(sql, function(err, results, fields){
        if(err){ return console.log("error : " + err.message); };

        console.log(results);
        for(var i = 0; i < fields.length; i++){
            for(var keyNm in results[i]){
                console.log(keyNm + ": " + results[i][keyNm]);
            }
        }
    })

    con.end(function(err){
        if(err){ return console.log("error : " + err.message); };
        console.log("Disconnected");
    });
});