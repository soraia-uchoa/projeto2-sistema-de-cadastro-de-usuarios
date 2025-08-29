class Usuario{
    static totalUsuarios = 0;
    #ativo

    constructor(nome,idade,email){
        this.#ativo = false
        this.nome = nome
        this.idade = idade
        this.email = email
        Usuario.totalUsuarios++
    }

    static totalUsuarios = 0

    static contarUsuarios() {
        console.log(`total de usuarios criados: ${this.totalUsuarios}`)
    }

    get ativo(){
        return this.#ativo
        }
    
    set ativo(valor) {
        if(valor == true || valor == false){
            this.#ativo = "S";
        }
    this.#ativo = (valor);

    }

    get boasVindas() {
    return `Bem-vindo, ${this.nome}!`;
    }

    mostrarDados() {
    console.log(`
    ${this.boasVindas}
    Nome: ${this.nome}
    Idade: ${this.idade}
    Email: ${this.email}
    Ativo: ${this.#ativo}
           `)
    }

}

module.exports = Usuario






 