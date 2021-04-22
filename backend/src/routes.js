const express = require('express')
const routes = express.Router()
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');


function verifyJWT(req, res, next){
  // const token = req.headers['x-access-token']
  // console.log(req.headers['x-access-token'])
  const token = req.headers['x-access-token'];  
  console.log('verify')
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.SECRET,  function(err, decoded) {
    if (err) return res.status(500).json({ auth: false, message: err});// 'Failed to authenticate token.' });      
    next();
  });
}

function refreshToken(req, res, next){
  // const token = req.headers['x-access-token'];
  console.log('refresh')
  const token = req.headers['x-access-token'];
  // console.log(token)
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
  //console.log('---'+token )
  jwt.verify(token, process.env.SECRET,  function(err, decoded) {
    
    if (err) return res.status(500).json({ auth: false, message: err});// 'Failed to authenticate token.' });
    const token = jwt.sign({ id:decoded.id }, process.env.SECRET, {
      expiresIn: 300 // expires in 5min
    });
    
    // res.locals.hello = 'alex'
    res.locals.__sessEntreLinhasRefresh = token;
    // res.data({__sessEntreLinhasRefresh : token})
    // res.send({'_sessEntreLinhasRefresh':token})
    // res.send({'ale':'1111'})
    // res.write({'ale':'aaaa'})
    // console.log(res['_sessEntreLinhasRefresh']+  '---222--')
    // console.log(res['ale'] + '----')        
    // res.headers['refresh'] = token
    next();
  });
}



const DiplomaController = require("./controllers/DiplomaController");
const Pessoas = require("./controllers/Pessoas");
const Correcoes = require("./controllers/Correcoes");
const Marcadores = require("./controllers/Marcador");

//Rota que controlará o login no app
routes.get('/Login', Pessoas.getLogin);
routes.get('/dadosusuario', verifyJWT, refreshToken,Pessoas.getDados)
routes.get('/logintoken',verifyJWT,refreshToken, Pessoas.loginToken)


routes.post('/atualizardadosusuario', verifyJWT, refreshToken,Pessoas.atualizarDados)

/// ROTAS CORRECOES
routes.post('/setcorrecoes', verifyJWT, refreshToken,Correcoes.setCorrecoes)
routes.get('/buscacorrecoes', verifyJWT, refreshToken,Correcoes.getCorrecoes)
// routes.get('/buscacorrecoes', Correcoes.getCorrecoes)
routes.get('/dadoscorrecao', verifyJWT, refreshToken,Correcoes.getDadosCorrecao)


///// Marcadores
routes.post('/setmarcador', verifyJWT, refreshToken,Marcadores.setMarcador )
routes.get('/getmarcadores', verifyJWT, refreshToken,Marcadores.getMarcadores )
routes.get('/getmarcador', verifyJWT, refreshToken,Marcadores.getMarcador )
routes.post('/deletemarcador', verifyJWT, refreshToken,Marcadores.deleteMarcador )


//// TESTE
routes.get('/rotalogin', DiplomaController.rotaLogin);
routes.get('/rotalogout', verifyJWT, refreshToken,DiplomaController.rotaLogout);
routes.get('/rotacliente', verifyJWT, refreshToken, DiplomaController.rotaCliente);

module.exports = routes;