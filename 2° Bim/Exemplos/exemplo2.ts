export class Conta {
    private numeroConta: string;
    private saldo: number;
    private correntista: Correntista;
  
    constructor(numeroConta: string, correntista: Correntista) {
      this.numeroConta = numeroConta;
      this.saldo = 0;
      this.correntista = correntista;
    }
  
    obterSaldo(): number {
      return this.saldo;
    }
  
    temSaldo(): boolean {
      return this.saldo > 0;
    }
  
    depositar(quantia: number): boolean {
      if (quantia > 0) {
        this.saldo += quantia;
        return true;
      }
      return false;
    }
  
    debitar(quantia: number): boolean {
      if (this.saldo >= quantia && quantia > 0) {
        this.saldo -= quantia;
        return true;
      }
      return false;
    }
  
    transferir(quantia: number, contaDestino: Conta): boolean {
      if (this.debitar(quantia)) {
        contaDestino.depositar(quantia);
        return true;
      }
      return false;
    }
  }
  
 