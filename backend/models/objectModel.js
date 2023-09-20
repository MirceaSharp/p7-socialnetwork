
import db from "../config/database.js";


export const getPosts = (result) => {
  db.query("SELECT * FROM posts", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};




export const getUsers = (result) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};



export const insertUser = (data, result) => {
  db.query("INSERT INTO users SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
export const insertPost = (data, result) => {
  db.query("INSERT INTO posts SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};




// Update Product to Database
export const updateProductById = (data, id, result) => {
  db.query(
    "UPDATE product SET PostTitle = ?, PostContent = ? WHERE Post_id = ?",
    [data.PostTitle, data.PostContent, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};




export const getUserByUsername = (username, callback) => {
  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
       callback(null, results[0]);
      }
    }
  );
};