//import express
import express from "express";

//import cors
import cors from "cors";

//import routes
import Router from "./routes/routes.js";

import bodyparser from "body-parser";


//init express
const app = express();

//use express json
app.use(express.json());
app.use(bodyparser.json());
//use cors

app.use(cors({
  origin: '*'
}));

//use router
app.use(Router);

//PORT
app.listen(5000, () => {
  console.log("Server running successfully");
});

