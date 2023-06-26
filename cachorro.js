"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = exports.Raça = void 0;
var Raça;
(function (Raça) {
    Raça["CARAMELO"] = "Caramelo";
    Raça["FOXPAULISTINHA"] = "Fox Paulistinha";
    Raça["SALSICHA"] = "Salsicha";
    Raça["GOLDEN"] = "Golden";
})(Raça || (exports.Raça = Raça = {}));
class Cachorro {
    constructor(nm, rc) {
        this.nome = nm;
        this.idade = 0;
    }
    latir(quant) {
        let latido = '';
        for (let i = 0; i < quant; i++) {
            latido += 'Au';
        }
        return latido;
    }
    inserirNome(nm) {
        this.nome = nm;
    }
    obterNome() {
        return this.nome;
    }
    inserirIdade(id) {
        if (id >= 0 && id <= 25)
            this.idade = id;
    }
    obterIdade() {
        return this.idade;
    }
    inserirRaca(rc) {
        this.raça = rc;
    }
    obterRaça() {
        return this.raça;
    }
}
exports.Cachorro = Cachorro;
