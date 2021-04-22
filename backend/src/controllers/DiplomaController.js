const db = require('../database/conn_mysql')
const CryptoJS = require("crypto-js");
const { post } = require('../routes');
const { Op, Sequelize } = require("sequelize");
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');



function rotaLogin (req,res, next){  
  const id = 1; //esse id viria do banco de dados
  const token = jwt.sign({ id }, process.env.SECRET, {
    expiresIn: 300 // expires in 5min
  });
  
  return res.json({ auth: true, token: token });
} 

function rotaLogout(req, res){
  res.json({ auth: false, token: null });
}

function rotaCliente(req,res, next){  
  //console.log("Retornou todos clientes!");
  // console.log()
  
  console.log(res.getHeader('_sessEntreLinhasRefresh'))
  res.json([{id:1,nome:'luiz'}]);
}

module.exports = { rotaLogin, rotaLogout, rotaCliente }




// //Exportará um objeto
// module.exports = {
//     index(req, res) {
//         console.log('alex')
        
//         const db = require("../database/conn_mysql");
//         console.log('começou')
//         // let codigo = req.params.codigo        
//         return res.status(200).send('alex')
//     }
// };