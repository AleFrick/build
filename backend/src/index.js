const express = require("express");
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
var session = require('express-session')
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: '2C44-4D44-WppQ38S',
//   resave: true,
//   saveUninitialized: true
// }));

// function verifyJWT(req, res, next){
//   const token = req.headers['x-access-token'];
//   if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
  
//   jwt.verify(token, process.env.SECRET, function(err, decoded) {
//     if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    
//     // se tudo estiver ok, salva no request para uso posterior
//     req.userId = decoded.id;
//     next();
//   });
// }

app.use(routes)

app.listen(3333);
