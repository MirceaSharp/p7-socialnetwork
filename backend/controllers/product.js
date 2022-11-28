//import functions from Product model
import {
  getPosts,
  getProductById,
  insertUser,
  insertPost,
  updateProductById,
  deleteProductById,
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

//get single product
export const showProductById = (req, res) => {
  getProductById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//create new product
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

// Update Product
export const updateProduct = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateProductById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Delete Product
export const deleteProduct = (req, res) => {
  const id = req.params.id;
  deleteProductById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
