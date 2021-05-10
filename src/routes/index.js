const express = require('express')
const router = express.Router()

const users = require('../controller/user.controller')

//---------------- Rutas para /v1/... -------------------------
router.get('/', (req, res)=>{
    res.json(showResults(true,'Bienvenid@ a Silver Robot'));
})

/**
 * @description: 
 */
//router.post('login', );
//router.get('coins',)

router.post('/user', users.create)

module.exports = router