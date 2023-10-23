//atributos 
class ContaBancaria {
    constructor(titular, tipoConta) {
      this.titular = titular;
      this.tipoConta = tipoConta;
      this.saldo = 0;
    }
  //metodos
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de ${valor} realizado. Saldo atual: ${this.saldo}`);
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de ${valor} realizado. Saldo atual: ${this.saldo}`);
      } else {
        console.log("Saldo insuficiente.");
      }
    }
  
    verSaldo() {
      console.log(`Saldo disponível: ${this.saldo}`);
    }
  }
  
  const minhaConta = new ContaBancaria("João", "Corrente");
  minhaConta.depositar(1000);
  minhaConta.sacar(500);
  minhaConta.verSaldo();

  //atributo
  class Tarefa {
    constructor(descricao, dataVencimento) {
      this.descricao = descricao;
      this.dataVencimento = dataVencimento;
      this.concluida = false;
    }
  //metodos
    marcarComoConcluida() {
      this.concluida = true;
      console.log(`Tarefa "${this.descricao}" marcada como concluída.`);
    }
  
    alterarDataDeVencimento(novaData) {
      this.dataVencimento = novaData;
      console.log(`Data de vencimento alterada para ${novaData}`);
    }
  
    exibirDetalhes() {
      console.log(`Tarefa: ${this.descricao}`);
      console.log(`Data de Vencimento: ${this.dataVencimento}`);
      console.log(`Concluída: ${this.concluida ? 'Sim' : 'Não'}`);
    }
  }
  
  const minhaTarefa = new Tarefa("Completar o projeto", "2023-11-15");
  minhaTarefa.exibirDetalhes();
  minhaTarefa.marcarComoConcluída();
  minhaTarefa.alterarDataDeVencimento("2023-11-20");
  minhaTarefa.exibirDetalhes();
  