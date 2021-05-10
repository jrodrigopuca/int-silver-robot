// archivo de configuración para DB

const dotenv= require('dotenv');
dotenv.config();


module.exports={
    dbServer: process.env.DB_SERVER,
    dbUser: process.env.DB_USER,
    dbPass:process.env.DB_PASS,
    dbDatabase:process.env.DB_DATABASE
}