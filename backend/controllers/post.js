import jwt from "jsonwebtoken"; 
import bcrypt from "bcrypt";
import {
  
  getPosts,
  
  insertUser,
  insertPost,
  
  getUsers,
  getUserByUsername,
} from "../models/objectModel.js";

//get all products
export const showPosts = (req, res) => {
  getPosts((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const showUsers = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};


export const handleLogin = (req, res) => {
  getUserByUsername(req.body.username, (err, user) => {
    if (err) {
      
      res.send(err);
      return
    } 
    if(!user){
      return res.status(401).json( { error: new Error("User not found!")} );
      
    }
    console.log(req.body)
    bcrypt.compare(req.body.password, user.Password)
    .then( (valid) => {

        if (!valid) {
            return res.status(401).json( { error: new Error("User not found!")} );
        }

        // Token generation
        const token = jwt.sign({ userId: user.idUSers}, 'Mircea123', { expiresIn: '24d'});

        // Both email and password are valid
        res.status(200).json( {userId: user.idUsers, token:token} );
        console.log("User has logged in successfully!");
    })
    .catch( (error) => {

       
        res.status(500).json( { error: error} );
    });
    console.log(user);
      //res.json(results);
     
    
  });
};


export const createUser = (req, res) => {
  const data = req.body;
  insertUser(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
export const createPost = (req, res) => {
  const data = req.body;
  insertPost(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};


// Delete Product

