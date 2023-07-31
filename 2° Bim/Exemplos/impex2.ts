 // Exemplo de uso da classe Correntista e Conta
  
  // Criando um correntista
  import { Conta } from "./exemplo2";
  const dataNascimento = new Date("1990-01-15"); // Exemplo de data de nascimento: 15 de janeiro de 1990
  const correntista1 = new Correntista("Fulano de Tal", "12345678901", dataNascimento, "(00) 1234-5678");
  
  // Criando as contas com o correntista associado
  const conta1 = new Conta("12345-6", correntista1);
  const conta2 = new Conta("54321-0", correntista1);
  
  // Adicionando dinheiro na conta1
  conta1.depositar(1000);
  
  // Consultando o saldo da conta1
  console.log("Saldo da conta1:", conta1.obterSaldo());
  
  // Debitando dinheiro da conta1
  conta1.debitar(500);
  
  // Transferindo uma quantia da conta1 para a conta2
  conta1.transferir(300, conta2);
  
  // Exibindo o saldo da conta2
  console.log("Saldo da conta2:", conta2.obterSaldo());
  