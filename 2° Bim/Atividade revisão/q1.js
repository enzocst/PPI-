"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elevador = void 0;
class Elevador {
    constructor(capacidade, totalAndares) {
        this.andarAtual = 0;
        this.totalAndares = totalAndares;
        this.capacidade = capacidade;
        this.quantidadePessoas = 0;
        this.portaAberta = false;
    }
    entrar(numeroPessoas) {
        if (this.portaAberta && this.quantidadePessoas + numeroPessoas <= this.capacidade) {
            this.quantidadePessoas += numeroPessoas;
            this.portaAberta = false; // Fecha a porta após entrar
        }
        else {
            console.log("Não é possível entrar no elevador.");
        }
    }
    sair(numeroPessoas) {
        if (this.portaAberta && this.quantidadePessoas - numeroPessoas >= 0) {
            this.quantidadePessoas -= numeroPessoas;
            this.portaAberta = false; // Fecha a porta após sair
        }
        else {
            console.log("Não é possível sair do elevador.");
        }
    }
    subir() {
        if (this.portaAberta) {
            console.log("Por favor, feche a porta antes de subir.");
        }
        else if (this.andarAtual < this.totalAndares - 1) {
            this.andarAtual++;
        }
        else {
            console.log("Já estamos no último andar. Não é possível subir mais.");
        }
    }
    descer() {
        if (this.portaAberta) {
            console.log("Por favor, feche a porta antes de descer.");
        }
        else if (this.andarAtual > 0) {
            this.andarAtual--;
        }
        else {
            console.log("Já estamos no térreo. Não é possível descer mais.");
        }
    }
    abrirPorta() {
        this.portaAberta = true;
    }
    fecharPorta() {
        this.portaAberta = false;
    }
    // Método para obter o andar atual
    getAndarAtual() {
        return this.andarAtual;
    }
    // Método para obter a quantidade de pessoas presentes no elevador
    getQuantidadePessoas() {
        return this.quantidadePessoas;
    }
    // Método para verificar se a porta está aberta ou fechada
    isPortaAberta() {
        return this.portaAberta;
    }
}
exports.Elevador = Elevador;
