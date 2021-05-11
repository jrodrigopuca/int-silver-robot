const User = require('../model/user')

exports.create = (req, res)=>{

    if (!req.body) {
        res.status(400).send({ 'result': 'error', 'data': 'No se puede enviar vacío'});
        return; 
    }

    if (!req.body.username || !req.body.name || !req.body.surname || !req.body.pass || !req.body.currency){
        res.status(400).send({'result': 'error', 'data': 'Todos los datos son requeridos'});
        return; 
    }

    if (req.body.pass.length<8 || (!req.body.pass.match(/^[0-9a-z]+$/))){
        res.status(400).send({'result': 'error', 'data': 'La contraseña no es válida'});
        return; 
    }

    const user = new User({
        username : req.body.username,
        name : req.body.name,
        surname : req.body.surname,
        pass : req.body.pass,
        currency : req.body.currency
    })

    User.create(user, (err, data)=>{
        if (err)    res.status(500).send({ 'result': 'error', 'data': data});
        else        res.send({'result': 'ok', 'data':data})
    })

}