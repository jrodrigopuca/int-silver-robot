const mysql = require("mysql");
const config = require("../config/db.config.js");

const connection = mysql.createConnection({
    host: config.dbServer,
    user: config.dbUser,
    password: config.dbPass,
    database: config.dbDatabase
});

connection.connect(error => {
    if (error) throw error;
    console.log("Conectado a base de datos");
});


module.exports = connection;