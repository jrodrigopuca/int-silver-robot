const User = require('../model/user')

exports.create = (req, res)=>{

    if (!req.body) {
        res.status(400).send({
            message: "No puede ser vacío"
        });
    }

    const user = new User({
        name : req.body.name,
        surname : req.body.surname,
        username : req.body.username,
        pass : req.body.pass,
        currency : req.body.currency
    })

    User.create(user, (err, data)=>{
        if (err)    res.status(500).send({ 'result': error, 'data': err});
        else        res.send({'result': 'ok', 'data':data})
        
    })

}