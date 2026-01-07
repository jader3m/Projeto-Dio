// Definição Classe heroi

class heroi { 
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

// criação do metodo dentro da classe

    atacar(){
        let ataque;

        if (this.tipo === "mago"){
        ataque = "magia"
        }
        else if (this.tipo === "guerreiro"){
            ataque = "espada"
        }
        else if (this.tipo === "monge"){
            ataque = "artes marciais"
        }
        else{
            ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

// Usuario entra com dados.

let nomeHeroi = gets();
let idade = parseInt(gets());
const tipoEscolhido =  gets();

// definição da nova variavel com os dados do objeto
let heroiEscolhido = new heroi (nomeHeroi, idade, tipoEscolhido)


// chamando o metodo atacar
heroiEscolhido.atacar()
