const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require('../models/User');

router.post("/signup", (req, res) => {
    User.findOne({email: req.body.email}).then(user => {
        if(user){
            //error
        } else {
            const newUser = new User({ name: req.body.name,
                                        email: req.body.email,
                                        points: Number(20)});

            newUser.setPassword(req.body.password);

            newUser.save().then(user => res.json(user)).catch(err => console.log(err));
        }
    })
}) ;

router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}).then(user => {
        if(!user) {
            //error
        } else {
            if(user.correctPassword(req.body.password)) {
                //login authentication
            }
        }
    })
})

module.exports = router;