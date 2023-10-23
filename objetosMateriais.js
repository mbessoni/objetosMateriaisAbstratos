//atributos
class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.ligado = false;
    }
  //metodos
    ligar() {
      this.ligado = true;
      console.log(`${this.marca} ${this.modelo} está ligado.`);
    }
  
    desligar() {
      this.ligado = false;
      console.log(`${this.marca} ${this.modelo} está desligado.`);
    }
  
    buzinar() {
      console.log(`${this.marca} ${this.modelo} está buzinando.`);
    }
  }
  
  const meuCarro = new Carro("Toyota", "Corolla", 2022);
  meuCarro.ligar();
  meuCarro.buzinar();
  meuCarro.desligar();

  //atributo
  class Computador {
    constructor(marca, tipo, sistemaOperacional) {
      this.marca = marca;
      this.tipo = tipo;
      this.sistemaOperacional = sistemaOperacional;
      this.estaLigado = false;
    }
  //metodo
    iniciar() {
      this.estaLigado = true;
      console.log(`${this.marca} ${this.tipo} está ligado com ${this.sistemaOperacional}.`);
    }
  
    desligar() {
      this.estaLigado = false;
      console.log(`${this.marca} ${this.tipo} está desligado.`);
    }
  
    executarPrograma(programa) {
      console.log(`Executando ${programa} no ${this.marca} ${this.tipo}.`);
    }
  }
  
  const meuComputador = new Computador("Dell", "Laptop", "Windows 10");
  meuComputador.iniciar();
  meuComputador.executarPrograma("Chrome");
  meuComputador.desligar();
  
  