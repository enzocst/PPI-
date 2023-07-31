"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voo = exports.Data = void 0;
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    modificardia(dia) {
        this.dia = dia;
    }
    obterdia() {
        return this.dia;
    }
}
exports.Data = Data;
class Voo {
    constructor(data, numero, reservas) {
        this.data = data;
        this.numero = numero;
        this.reservas = false;
    }
    ocupado(assento) {
        if (assento > 7) {
            this.reservas = true;
        }
        else {
            false;
        }
    }
    quantidadeocupados() {
        return this.ocupado;
    }
    reservar(numero) {
    }
}
exports.Voo = Voo;
