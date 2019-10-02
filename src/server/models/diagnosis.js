var mysql = require('mysql');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('doto', 'zun952', 'tlsehdals11', {
    dialect: 'mysql',
    dialectModule: 'mysql2',
    host: 'localhost',
    port: 3001,
    define: {
        timestamps: false,
        freezeTableName: true
    },
    pool: {
        max: 10,
        min: 0,
        idle: 1000
    }
    
});

var Diagnosis = sequelize.define('diagnosis', {
    diagnosis_id: { type: INTEGER, PrimaryKey: true, autoIncrement: true },
    user_id: { type: STRING },
    pet_id: { type: INTEGER },
    clinic_code: { type: INTEGER },
    diagnosis_date: { type: STRING },
    diagnosis_name: { type: STRING },
    sick_date: { type: String },
    diagnosis_symptom: { type: String },
    diagnosis_record: { type: String },
    diagnosis_cost: { type: INTEGER }
});

sequelize.transaction().then(function(t){
    Diagnosis.create({name:'test'}, {
        transaction: t
    }).then(function(){
        t.commit();
    }).then(function(err){
        console.log(err);
        t.rollback();
    });
});