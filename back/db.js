const { error } = require('console');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'cine'
});

db.connect((error) => {
    if(error) throw error;
    console.log('Conectaod a la base de datos');
});

module.exports = db;

