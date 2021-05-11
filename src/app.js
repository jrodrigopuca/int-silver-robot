const {port} = require('./config')
const express = require('express')
//const bodyParser = require("body-parser")
const routes = require('./routes')
//const path = require('path')

/**
 * WChallenge
 * 1) Crear usuarios
 * 2) Login con token
 * 3) Lista de criptomonedas
 * 4) Usuarios x Cripmonedas
 * 5) Top de Usuario x Criptomoneda
 */

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.listen(port, ()=>{
    console.info(`El server está funcionando en http://localhost:${port}`);
})

app.use('/api', routes)
//app.use('/docs', express.static(path.join(__dirname, 'public'))) // mostrar documentación

module.exports= app;