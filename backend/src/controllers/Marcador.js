const db = require('../database/conn_mysql')
const CryptoJS = require("crypto-js");
const { post } = require('../routes');
const { Op, Sequelize } = require("sequelize");
require('dotenv/config');


function setMarcador(req, res){
  const data = new Date()
  let body = req.body

  if(!body.id_marcacao > 0){
    console.log('insert')
    const marcacoes = db.Marcacoes.build({
      post_x: body.x || null,
      pos_y: body.y || null,
      tam_h: body.height || null,  
      tam_w: body.width || null,    
      correcoId: body.id_correcao || null,
      marcacao_item: body.marcacao_item || null,   
      observacao: body.observacao || null,   
      createdAt: data.toLocaleDateString() ,
      updatedAt: data.toLocaleDateString() 
    })
    marcacoes.save().then(result => {      
      res.status(200).send({result: true, id: result.id,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
    }).catch(err => {
      res.status(200).send({return: false, msg:'nada feito',__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
    })  
  }else{              
    db.Marcacoes.findByPk(body.id_marcacao).then(marcacoes => {              
      marcacoes.pos_y = body.y || null            
      marcacoes.pos_x = body.x || null      
      marcacoes.tam_h = body.height || null
      marcacoes.tam_w = body.width || null
      marcacoes.updatedAt = data.toLocaleDateString()
      marcacoes.marcacao_item = body.marcacao_item
      marcacoes.observacao = body.observacao
      
      marcacoes.save().then(() => {    
        res.status(200).send({result:true, dados: 'ok',__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
      }).catch(err => {
        res.status(200).send({result: false, msg: err,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
      })
      // res.send('ok')
    }).catch(err => {
      res.status(200).send({result: false, msg: err,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
    })
  }  
}

function getMarcadores(req, res){
  let param = req.query
  
  if(param.id_correcao){    
    db.Correcoes.findAll({
      where: {
        id: param.id_correcao
      },
      include:[{
        model: db.Marcacoes
      }]
    }).then(dados =>{       
      // console.log(dados[0].marcacoes)
      res.send({result: true, dados: dados[0].marcacoes,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
    }).catch(err=>{
      res.status(200).send({result: false, msg: err,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
    })
  }else{
    res.status(200).send({result: false, msg:'Informe o id_correcao',__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
  }  
}

function getMarcador(req, res){
  let param = req.query
  
  if(param.id){
    db.Marcacoes.findByPk(param.id).then(dados =>{
      res.send({result: true, dados: dados,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
    }).catch(err => {
      res.status(200).send({result: false, msg: err,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
    })
  }else{
    res.status(200).send({result: false, msg: 'Informe o Id do marcador',__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
  }
}

function deleteMarcador(req, res){
  let body = req.body
  console.log(`<><><><> ${body.id} <><<><><<<>`)
  if(body.id){
    db.Marcacoes.findByPk(body.id).then(dados => {
      dados.destroy().then(dell => {
        res.status(200).send({result:true, msg:'ok',__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
      }).catch(err => {
        res.status(200).send({result: false, msg: err,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
      })
    }).catch(err => {
      res.status(200).send({result: false, msg: err,__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
    })
  }else{
    res.status(200).send({result: false, msg: 'Informe o ID da marcação.',__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
  }
}

module.exports = { setMarcador, getMarcadores, getMarcador, deleteMarcador }