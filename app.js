const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require('path');

const app = express();
const port = 8800;

const indexRoute = require('./routes/index');
// const response = require('./cofig/response');

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, *POST*, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
  
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(morgan("dev"));
  app.use(indexRoute);

app.use(express.static(path.join(__dirname,'uploads')));

// error-middleware
// app.use((req, res, next) => {
//     return res.status(404).send(response({
//       success:false,
//       status: 404,
//       error: 'Not found'
//     }))
//   })
  
//   app.use((err,req,res,next)=>{
//       if(err){
//           console.log(err,"::middleware-err");
//            return res.status(err.status).send(response({
//                   success:false,
//                   error:err.error,
//               })
//           )
//       }else{
//           next();
//       }
//   })



  app.listen(port, (err) => {
    if (err) {
      console.log("server cashed down:", err);
    } else {
      console.log(`server up and running at http://localhost:${port}`);
    }

  });    