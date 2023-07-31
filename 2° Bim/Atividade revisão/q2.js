"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hospedagem = exports.Aposento = exports.Hospede = void 0;
class Hospede {
    constructor(nome, cpf, telefone, endereco) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.endereco = endereco;
    }
    obternome() {
        return this.nome;
    }
    obtercpf() {
        return this.cpf;
    }
    obtetelefone() {
        return this.telefone;
    }
    obterendereco() {
        return this.endereco;
    }
}
exports.Hospede = Hospede;
class Aposento {
    constructor(tipo, precoDiaria) {
        this.tipo = tipo;
        this.precoDiaria = precoDiaria;
    }
    obtertipo() {
        return this.tipo;
    }
    obterprecodiaria() {
        return this.precoDiaria;
    }
}
exports.Aposento = Aposento;
class Hospedagem {
    constructor(aposento) {
        this.hospedes = [];
        this.aposento = aposento;
    }
    hospedar(hospede) {
        this.hospedes.push(hospede);
    }
    calcular_total(quant_diarias) {
        return this.aposento.obterprecodiaria() * quant_diarias;
    }
    obterhospedes() {
        return this.hospedes;
    }
    obteraposento() {
        return this.aposento;
    }
}
exports.Hospedagem = Hospedagem;
