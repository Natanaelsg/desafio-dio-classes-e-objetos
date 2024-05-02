class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch(this.tipo.toLowerCase()){
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
     
    
    }



// Exemplo de uso
let meuHeroi = new Heroi("Leônidas", 30, "Guerreiro");
meuHeroi.atacar(); // Saída: O Guerreiro atacou usando espada

