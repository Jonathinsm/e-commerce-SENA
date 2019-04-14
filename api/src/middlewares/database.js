'use strict'

const mysql = require('promise-mysql');

const dbConn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'tatan',
    database: 'dbalpha',
    multipleStatements: true
})

dbConn.getConnection()
    .then(connecion =>{
        dbConn.releaseConnection(connecion);
        console.log('DB Connected');
    });
module.exports = dbConn;