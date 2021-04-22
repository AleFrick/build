const db = require('../database/conn_mysql')
const CryptoJS = require("crypto-js");
const qryUsuarios = require('../qry/Usuarios')
const qryPessoas = require('../qry/Pessoas')
require('dotenv/config');
const jwt = require('jsonwebtoken');


function getLogin (req,res) {   
  let param = req.query 
  let login = param.login
  let pass = param.pass
    
  if((pass == null || pass == '') || (login == null || login == '')){
    res.status(200).send({msg : 'Verifique os dados informados.',__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
  }{
    let passCrypt = CryptoJS.AES.encrypt(pass, process.env.KEY_CRYPT).toString();       
    //var ciphertext = CryptoJS.AES.encrypt('123', process.env.KEY_CRYPT).toString();
    //var bytes  = CryptoJS.AES.decrypt(ciphertext, process.env.KEY_CRYPT);
    //var originalText = bytes.toString(CryptoJS.enc.Utf8);     
    // console.log(originalText); // 'my message'
    let qry = qryUsuarios.getUsuarioLogin(login)
      
    db.sequelize.query(qry, { type: db.Sequelize.QueryTypes.SELECT }).then(aPessoa => {  
      console.log(aPessoa)
      if(aPessoa[0] != null){            
        var bytes  = CryptoJS.AES.decrypt(aPessoa[0].SENHA, process.env.KEY_CRYPT);            
        if(pass == bytes.toString(CryptoJS.enc.Utf8)){    
          let id = aPessoa[0].ID_USUARIO          
          const token = jwt.sign({ id:id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
          });     
          res.status(200).send({result: true, pessoa: aPessoa[0], token: token})

        }else{          
          res.status(200).send({result: false, msg: 'Verifique a senha informado.',__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
        }        
      }else{                    
        res.status(200).send({result: false, msg:'usuário não encontrado.',__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
      }
    }).catch(err => {      
      res.status(400).send({msg:err,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
    })
  }
}

function getDados(req,res){
  let param = req.query   
  let id = param.id || null
  if(id != null){
    let qry = qryPessoas.getPessoaIdUsuario(id)
    db.sequelize.query(qry, {type: db.Sequelize.QueryTypes.SELECT}).then(dados => {        
      res.status(200).send({result: true, dados:dados[0],__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
    }).catch(err => {
      res.send(200).send({result:false, msg: err,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
    })    
  }else{
    res.status(200).send({result: false, msg:'Informar o ID',__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
  }
}

async function atualizarDados(req, res){  
  let body = req.body  
  let data = new Date()
  
  let id = body.id_usuario || null
  if(id){        
    db.Usuarios.findByPk(id).then(usuario => {
      if(usuario.id){
        db.Pessoas.findByPk(usuario.id).then( pessoa =>{
          if(pessoa.id){            
            pessoa.nome_pessoa = body.nome || pessoa.nome_pessoa
            pessoa.updatedAt = data.toLocaleDateString()            
            pessoa.sexo = body.sexo || pessoa.sexo
            pessoa.save().then(() => {              
              usuario.login = body.login || usuario.login
              usuario.updatedAt = data.toLocaleDateString()
              usuario.save().then(() => {
                res.status(200).send({result: true, msg:'Dados salvos.',__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
              }).catch(err => {
                res.status(200).send({result: false, msg:err,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
              })
            }).catch(() => {
              res.status(200).send({result: false, msg: err,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
            })
          }else{
            res.status(200).send({result: false, msg: 'Pessoa não encontrada.',__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh}) 
          }
        }).catch( err => {
          res.status(200).send({result: false, msg: err,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
        })
      }else{
        res.status(200).send({result:false, msg:'Usuário não encontrado.',__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
      }
      // res.status(200).send({result: true, msg: usuario.id})
    }).catch(err => {
      res.status(200).send({result: false, msg: err,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
    })    
  }  
}

function loginToken(req, res){
  console.log(req.headers['x-access-token'])
  res.send('oi')
}

module.exports = { getLogin, getDados, atualizarDados, loginToken }
