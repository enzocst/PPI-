"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Correntista = void 0;
class Correntista {
    constructor(nome, cpf, dataNascimento, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.telefone = telefone;
    }
    modificarNome(nome) {
        this.nome = nome;
    }
    obterNome() {
        return this.nome;
    }
    modificarCpf(cpf) {
        this.cpf = cpf;
    }
    obterCpf() {
        return this.cpf;
    }
    modificarDataNascimento(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
    obterDataNascimento() {
        return this.dataNascimento;
    }
    modificarTelefone(telefone) {
        this.telefone = telefone;
    }
    obterTelefone() {
        return this.telefone;
    }
}
exports.Correntista = Correntista;
