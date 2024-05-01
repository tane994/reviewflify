const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'CRUDDatabase'
});

module.exports = dbPool;
