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

//usuario existente
User.exist = (username)=>{
    mysql.query("SELECT COUNT(*) AS count FROM users WHERE username_u=?",[username], (err, res, fields)=>{
        console.log(res[0].count)
        return(res[0].count > 0)
    })
}


module.exports = User;