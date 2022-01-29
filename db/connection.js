const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root', // MySQL username
        password: '', // MySQL password
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;