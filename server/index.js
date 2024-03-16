const express = require ('express')
const  mongoose = require('mongoose')
const cors = require('cors')
const User = require('./Models/UserModel')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/registerForm')

app.post('/login', (req, res) => {
    const{email, password} = req.body;
    User.findOne({email: email})
    .then(user => {
        if(user){
             if(user.password === password){
                res.json("Success")
            } else{
            res.json("Incorrect password")
        }
    } else {
        res.json("failed, user don't exists")}

    })
})
app.post('/register', (req, res) => {
    User.create(req.body)
   .then(user => res.json(user))
   .catch(err => res.json(err))

})




app.listen(3001, () => {
    console.log('Server running on port 3001')
})