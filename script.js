class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = "";
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "um ataque indefinido";
          break;
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const heroiMago = new Hero("Gandalf", 1000, "mago");
  const heroiGuerreiro = new Hero("Aragorn", 35, "guerreiro");
  const heroiMonge = new Hero("Bruce Lee", 32, "monge");
  const heroiNinja = new Hero("Hattori Hanzo", 45, "ninja");
  
  heroiMago.atacar(); // Exibe: O mago atacou usando magia
  heroiGuerreiro.atacar(); // Exibe: O guerreiro atacou usando espada
  heroiMonge.atacar(); // Exibe: O monge atacou usando artes marciais
  heroiNinja.atacar(); // Exibe: O ninja atacou usando shuriken