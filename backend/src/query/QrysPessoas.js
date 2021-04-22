const buscaDadosPessoas = (id) => {
  return `
      select u.id as id_usuario, p.nome_pessoa, p.sexo, u.login, u.senha
      from pessoas p
          join usuarios u on ( u.id_pessoa = p.id )
      where p.id = ${id}
  `
}

const atualizarDadosPessoa = (nome, sexo, id) => {    
  return `
    update pessoas (nome, sexo,updatedAt) values (${nome}, ${sexo}, current_date) where id = ${id}
  `
}

const atualizarDadosUsuario = (login, senha, id) => {
  return `
    update usuarios (login, senha, updatedAt) values (${login}, ${senha}, current_date) where id_pessoa = ${id}
  `
}

module.exports = { 
  buscaDadosPessoas,
  atualizarDadosPessoa,
  atualizarDadosUsuario  
}