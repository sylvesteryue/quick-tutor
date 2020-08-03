const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require('../../config/keys');

const User = require('../../models/User');

router.get("/", (req, res) => {
    User.find({}, (err, data) => {
        console.log(">>>>" + data);

        return res.json(data);
    });
});

router.post("/signup", (req, res) => {
    console.log(req.body);

    User.findOne({email: req.body.email}).then(user => {
        if(user){
            return res.status(400).json({email: "Email already exists"});
        } else {
            const newUser = new User({ name: req.body.name,
                                        email: req.body.email,
                                        points: Number(20)});

            newUser.setPassword(req.body.password);

            newUser.save()
                .then(user => {
                    return res.json(user);
                    
                    // const payload = {
                    //     id: user.id,
                    //     name: user.name
                    // };
        
                    // jwt.sign(
                    //     payload,
                    //     keys.secretOrKey,
                    //     {
                    //         expiresIn: 31556926 
                    //     },
                    //     (err, token) => {
                    //         res.json({
                    //             success: true,
                    //             token: "Bearer " + token
                    //         });
                    //     }
                    // );
            }).catch(err => console.log(err));
            
           
        }
    })
});

router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}).then(user => {
        if(!user) {
            return res.status(400).json({emailNotFound: "Email not found"});
        } else {
            if(user.correctPassword(req.body.password)) {
                const payload = {
                    id: user.id,
                    name: user.name
                };

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        }
    })
});

module.exports = router;