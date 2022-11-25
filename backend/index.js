//import express
import express from "express";

//import cors
import cors from "cors";

//import routes
import Router from "./routes/routes.js";
import db from "./config/database.js";

//init express
const app = express();

//use express json
app.use(express.json());

//use cors
app.use(cors());

//use router
app.use(Router);

//PORT
app.listen(5000, () => {
  console.log("Server running successfully");
});


app.post('/create', (req,res) =>{
  db.query(
    "INSERT INTO users (Username, Password) VALUES (?,?)",
     [Username, Password],
     (err,result) =>{
    console.log(err);
  }
  )
});