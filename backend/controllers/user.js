
const login = require("../models/objectModel.js"); // Import User model
const bcrypt = require("bcrypt"); // Import bcrypt algorithm
const jwt = require("jsonwebtoken"); // Import JWT for token generation


// Login
exports.login = (req, res, next) => {

    login.findOne({ username: req.body.username })
        .then( (user) => {

            // User not found
            if (!user) {
                return res.status(401).json( { error: new Error("User not found!")} );
            }

            // Check password if user exists
            bcrypt.compare(req.body.password, user.password)
                .then( (valid) => {

                    if (!valid) {
                        return res.status(401).json( { error: new Error("User not found!")} );
                    }

                    // Token generation
                    const token = jwt.sign({ userId: idUsers},'RANDOM_TOKEN_SECRET', { expiresIn: '24d'});

                    // Both email and password are valid
                    res.status(200).json( {userId: idUsers, token: token} );
                    console.log("User has logged in successfully!");
                })
                .catch( (error) => {

                    // Generate internal server error
                    res.status(500).json( { error: error} );
                });
        })
        .catch( (error) => {

            // Generate internal server error
            res.status(500).json( { error: error} );
        });
};

