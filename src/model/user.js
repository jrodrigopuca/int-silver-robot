const sql = require('./db')

const User = (user) =>{
    this.name = user.name;
    this.surname = user.surname;
    this.username = user.username;
    this.pass = user.pass;
    this.currency = user.currency;
}

// constructor
User.create = (newUser, result)=>{
    sql.query("INSERT INTO user SET ?", newUser, (err, res)=>{
        if (err){
            //console.log("error al crear", err);
            result('error al crear usuario', null);
            return
        }

        result(null, {id: res.insertId, ...newUser})
    })
}


module.exports = User;