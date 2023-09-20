//import express
import express from "express";


//import functions from controller
import {handleLogin,
  showPosts,
  createUser,
  createPost,
  
  showUsers

} from "../controllers/post.js";


//init express router
const router = express.Router();

//get all product
router.get("/posts", showPosts);
router.get("/users", showUsers)
router.post("/login", handleLogin)

//get single product


// Create New Product
router.post("/users", createUser);
router.post("/posts", createPost);



//export default router
export default router;
