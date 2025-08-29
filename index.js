const Usuario = require('./class/Usuario')
const prompt = require('prompt-sync')()


let usuarios = []

let adicionarUsuario = ''

do {
    let nome = prompt('Nome do usuario: ')
    let idade = prompt('Idade do usuario: ')
    let email = prompt('Email do usuário: ')
    let usuarioAtivo = prompt('Usuario ativo? [S/N]: ')
    adicionarUsuario = prompt('Deseja adicionar outro usuario? [S/N]: ')
    
    let usuario = new Usuario(nome, idade, email)
    usuarioAtivo.toUpperCase().trim() == 'S' ? usuario.ativo = true : usuario.ativo = false
    usuarios.push(usuario)

} while (adicionarUsuario.toUpperCase().trim() == 'S')

usuarios.forEach((el, i) => {
    el.mostrarDados()
    i == usuarios.length - 1 ? Usuario.contarUsuarios() : null
})