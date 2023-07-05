"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contato = void 0;
class Contato {
    constructor(nm, eml, tele) {
        this.alterarnome(nm);
        this.alteraremail(eml);
        this.alterartelefone(tele);
    }
    alterarnome(n) {
        this.nome;
        return true;
        return false;
    }
    obternome() {
        return this.nome;
    }
    alteraremail(n) {
        this.email;
        return true;
        return false;
    }
    obteremail() {
        return this.email;
    }
    alterartelefone(n) {
        if (n >= 0 && n <= 100) {
            this.telefone = n;
            return true;
        }
        return false;
    }
    obtertelefone() {
        return this.telefone;
    }
}
exports.Contato = Contato;
