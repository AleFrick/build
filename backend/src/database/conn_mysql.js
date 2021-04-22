require('dotenv/config');

const Sequelize =  require('sequelize')
const sequelize = new Sequelize(process.env.NAME_DB, process.env.USER_DB, process.env.PASS_DB, {
  host: process.env.HOST_DB,
  dialect: 'mysql',
  port: process.env.PORT_DB  
})

/* MODEL */
const Pessoas = sequelize.define('pessoas', {
  nome_pessoa: {
    type: Sequelize.STRING,
  },
  sexo: {
    type: Sequelize.CHAR
  }
})


const Usuarios = sequelize.define('usuarios', {
  login: {
    type: Sequelize.STRING
  },
  senha: {
    type: Sequelize.STRING
  },
  pessoaId: {
    type: Sequelize.INTEGER
  },
  cod_tabela: {
    type: Sequelize.INTEGER
  },
  item_tabela: {
    type: Sequelize.INTEGER
  }
})

const TabEstruturada = sequelize.define('tab_estruturada', {
  descricao: {
    type: Sequelize.STRING
  },
  cod_tabela: {
    type: Sequelize.INTEGER
  },
  item_tabela: {
    type: Sequelize.INTEGER  
  }
})

const Marcacoes = sequelize.define('marcacoes', {
  pos_x: {
    type: Sequelize.DOUBLE
  },
  pos_y: {
    type: Sequelize.DOUBLE
  },
  tam_h: {
    type: Sequelize.DOUBLE
  },
  tam_w: {
    type: Sequelize.DOUBLE
  },
  marcacao_tab: {
    type: Sequelize.INTEGER
  },
  marcacao_item: {
    type: Sequelize.INTEGER
  },
  correcoId: {
    type: Sequelize.INTEGER
  },
  observacao: {
    type: Sequelize.STRING
  }
})

const Correcoes = sequelize.define('correcoes', {
  descricao: {
    type: Sequelize.STRING
  },
  titulo: {
    type: Sequelize.STRING
  },
  arquivo: {
    type: Sequelize.BLOB
  },
  extensao: {
    type: Sequelize.STRING
  },
  usuarioId: {
    type: Sequelize.INTEGER
  }
})

/* FIM DECLARACAO MODEL */

/* Associações */
Correcoes.belongsTo(Usuarios,{
  foreignKey: 'usuarioID'
})
Usuarios.hasMany(Correcoes)

Usuarios.belongsTo(Pessoas, {
  foreignKey: 'pessoaId'
})
Pessoas.hasMany(Usuarios)

// Marcacoes.belongsTo(Correcoes, {
//   foreignKey: {
//     name: 'correcaoId'
//   }
// })
Correcoes.hasMany(Marcacoes)
Marcacoes.belongsTo(Correcoes,{ foreignKey: 'correcoId' })
/* FIM Associações */

Pessoas.sync()
Usuarios.sync()
Correcoes.sync()
Marcacoes.sync()

// Forma de Cryptografar senhas
 const saltCrypt = parseInt(process.env.CRYPT_SALT)
 const CryptKey = parseInt(process.env.KEY_CRYPT)
// const salt = bcrypt.genSaltSync(saltCrypt)
// const hash = bcrypt.hashSync('myPlaintextPassword', salt);
// console.log(hash)


module.exports = { Pessoas, Usuarios, Correcoes, Marcacoes, sequelize, Sequelize, saltCrypt, CryptKey }