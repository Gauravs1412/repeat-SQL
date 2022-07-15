const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'db_connect',
    password: 'radadiya123'
});

module.exports = pool.promise();