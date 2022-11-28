//import express
import express from "express";

//import functions from controller
import {
  showPosts,
  showProductById,
  createUser,
  createPost,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

//init express router
const router = express.Router();

//get all product
router.get("/products", showPosts);

//get single product
router.get("/products/:id", showProductById);

// Create New Product
router.post("/products", createUser);
router.post("/postsdisplay", createPost);

// Update Product
router.put("/products/:id", updateProduct);

// Delete Product
router.delete("/products/:id", deleteProduct);

//export default router
export default router;
