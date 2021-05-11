const mysql = require('./db')

//estructura del user
const User = function(user){
    this.name_u = user.name;
    this.surname_u = user.surname;
    this.username_u = user.username;
    this.pass_u = user.pass;
    this.currency_u = user.currency;
}

//para crear usuario
User.create = (newUser, result)=>{
    mysql.query("INSERT INTO users SET ?", newUser, (err, res)=>{
        if (err){
            result('error al crear usuario', err);
            return;
        }

        result(null, {id: res.insertId, ...newUser})
    })
}


module.exports = User;