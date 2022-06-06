var mysql= require('mysql');
var conn=mysql.createConnection({
    host: 'SU_HOST',
    user: 'SU_USUARIO',
    port: 'SU_PUERTO',
    password: 'SU_PASSWORD',
    database: 'SU_BASEDEDATOS',
    multipleStatements: true
});

conn.connect(err =>{
    if(!err){
        console.log(`Conexion a MYSQL correctamente!!!`)
    }else{
        console.log(`FALLO EN CONECTARSE A MYSQL: ${err}`)
    }
});

module.exports= conn;