const request = require('supertest');
const User = require('../src/model/user')

describe('User', ()=>{
    it('crear usuario', (done)=>{
        const user = new User({});
        User.create(user, (err, data)=>{
            
        })
    })
})