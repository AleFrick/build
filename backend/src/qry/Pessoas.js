// complentando a qry conforme aumentar o banco
const getPessoaIdUsuario = ( id ) => {
  return `select p.nome_pessoa,p.sexo, u.login,
            u.login, u.cod_tabela, u.item_tabela
          from usuarios u
            join pessoas p on ( p.id = u.pessoaId )            
          where u.id = ${id}`
}
// complentando a qry conforme aumentar o banco
const getPessoaLike = ( nome ) => {
  return `select * from pessoas where nome_pessoa like '%${nome}%'`
}

module.exports = {getPessoaIdUsuario, getPessoaLike}