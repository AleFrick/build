const db = require('../database/conn_mysql')
const CryptoJS = require("crypto-js");
const { post } = require('../routes');
const { Op, Sequelize } = require("sequelize");
var moment = require('moment');
require('dotenv/config');

function setCorrecoes(req, res){  
  const data = new Date()
  let body = req.body  

  if(!body.id_correcao > 0){    
    const postCorrecoes = db.Correcoes.build({
      titulo: body.titulo || null,
      descricao: body.descricao || null,      
    })
    postCorrecoes.save().then(() => {
      res.status(200).send({return: true, msg: 'Correcoes inseridas.'})
    }).catch( err => {
      res.status(200).send({return: true, msg: err})
    })
  }else{    
    db.Correcoes.findByPk(body.id_correcao).then( postCorrecoes => {
      postCorrecoes.titulo = body.titulo || null
      postCorrecoes.descricao = body.descricao || null
      postCorrecoes.arquivo = body.arquivo || null  
      postCorrecoes.updatedAt = data.toLocaleDateString()          
      postCorrecoes.save().then(() => {        
       res.status(200).send({return: true, msg: 'Correcoes inseridas.',__sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
      }).catch( err => {        
        res.status(200).send({return: false, msg: 'err'})
    }).catch(err => res.status(200).send({return: false, msg: 'err'}))
    }).catch(err => {
      res.status(200).send({return:false,msg:'1'})
    })    
  }

}

function getCorrecoes (req, res){     
  let param = req.query
  
  let str = param.titulo.split(" ")
  let strBusca = ''  
  
  // console.log(res.locals.__sessEntreLinhasRefresh+ '---')

  if(param.titulo){    
    for(let i = 0; i < str.length; i++){
      
      strBusca = strBusca + '%' + str[i]
      if(str.length == 1){
        strBusca = strBusca + '%'
      }
    }        
    // console.log(res['_sessEntreLinhasRefresh'] +  '---1111--')    
    if(param.dtInicio || param.dtFim){      
      if(param.dtInicio &&  param.dtFim){
        db.Correcoes.findAll({
          attributes: [
            'id', 'titulo', ['CreatedAt', 'dtCriacao']            
          ],
          where:  {
            titulo: { [Op.like]: `%${strBusca}%`},
            createdAt: {
              [Op.between]: [moment(param.dtInicio).format('yyyy-MM-DD'), moment(param.dtFim).format('yyyy-MM-DD')]
            }
          }, 
          include: [{
            model: db.Usuarios ,
            attributes: [
              'id'
            ],
            include: [{
              model: db.Pessoas,
              attributes: [
                'nome_pessoa'
              ]
            }]
          }]

        }).then(dados => {                   
          res.send({return: true, dados:dados, __sessEntreLinhasRefresh : res.locals.__sessEntreLinhasRefresh})
        }).catch(err => {
          console.log('mamama')
          console.log(err)
          res.status(400).send({return: false, msg: err})
        })
      }else{
        res.status(400).send('Verifique os parâmetros informados.')
      }
    }else{
      db.Correcoes.findAll({
        attributes: [
          'id', 'titulo', ['createdAt', 'dtCriacao']
        ],
        where:  {
          titulo: { [Op.like]: `%${strBusca}%`}          
        }, 
        include: [{
          model: db.Usuarios ,
          attributes: [
            'id'
          ],
          include: [{
            model: db.Pessoas,
            attributes: [
              'nome_pessoa'
            ]
          }]
        }]

      }).then(dados => {            
        res.status(200).send({return: true, dados:dados, __sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
      }).catch(err => {
        console.log(err)
        res.status(400).send({return: false, msg: err})
      })
    }
  }else{    
    res.status(200).send({return: false, msg:'Informe o titulo para busca'})
  }
  
}

function getDadosCorrecao(req, res){
  let param = req.query  
  if(param.id){
    db.Correcoes.findByPk(param.id,{
      include: [{
        model: db.Usuarios,
        include: [{
          model: db.Pessoas
        }]
      }]
    }).then(dados => {            
      res.status(200).send({return: true, dados: dados, __sessEntreLinhasRefresh:res.locals.__sessEntreLinhasRefresh})
    }).catch(err => {
      res.status(200).send({return: false, msg: err})
    })
  }else{
    res.status(200).send({return: false, msg:'Informe o id'})
  }  
}

module.exports = {setCorrecoes, getCorrecoes, getDadosCorrecao}