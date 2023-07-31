"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numeroConta, correntista) {
        this.numeroConta = numeroConta;
        this.saldo = 0;
        this.correntista = correntista;
    }
    obterSaldo() {
        return this.saldo;
    }
    temSaldo() {
        return this.saldo > 0;
    }
    depositar(quantia) {
        if (quantia > 0) {
            this.saldo += quantia;
            return true;
        }
        return false;
    }
    debitar(quantia) {
        if (this.saldo >= quantia && quantia > 0) {
            this.saldo -= quantia;
            return true;
        }
        return false;
    }
    transferir(quantia, contaDestino) {
        if (this.debitar(quantia)) {
            contaDestino.depositar(quantia);
            return true;
        }
        return false;
    }
}
exports.Conta = Conta;
