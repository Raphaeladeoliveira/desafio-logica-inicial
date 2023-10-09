class heroi{
	constructor(name, age, tipo){
    	this.name = name
        this.age = age
        this.tipo = tipo
        
    }
    
    //metodo
    attack() {
        let ataque = "";
        switch (this.tipo) {
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
                ataque = "usou um ataque desconhecido";
        }
    	console.log(`O ${this.tipo} ${this.name} de ${this.age} anos atacou, ${ataque}`);
}
}
//fora do escopo da classe
//instanciando


let guerreiro = new heroi("Lancelot", 20, "guerreiro")
let monge = new heroi("Ip man", 45, "monge")
let ninja = new heroi("Naruto", 19, "ninja")
let mago = new heroi("Hermione", 17, "mago")


//chamando os metodos
mago.attack()