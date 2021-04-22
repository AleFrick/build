/* SELECT */
const getUsuarioLogin = (login) => {
  return `SELECT U.ID as ID_USUARIO, U.pessoaId, U.LOGIN, U.SENHA, P.NOME_PESSOA, P.SEXO
  FROM usuarios U
       JOIN pessoas P ON ( P.ID = U.pessoaId )
  WHERE U.LOGIN = '${login}'`
}


/* UPDATE */
const atualizarUsuario = (dados) => {
  return `
    update usuarios
    set login = '${dados.login}',
        senha = '${dados.senha}',
        updatedAt = '${dados.updatedAt}'
    where id = ${dados.id}
  `
}


/* DELETE */


module.exports = { getUsuarioLogin, atualizarUsuario }