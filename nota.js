"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nota = void 0;
class Nota {
    constructor(b1, b2, b3, b4) {
        this.bim1 = 0;
        this.bim2 = 0;
        this.bim3 = 0;
        this.bim4 = 0;
        this.alterarBim1(b1);
        this.alterarBim2(b2);
        this.alterarBim3(b3);
        this.alterarBim4(b4);
    }
    alterarBim1(n) {
        if (n >= 0 && n <= 100) {
            this.bim1 = n;
            return true;
        }
        return false;
    }
    obterBim1() {
        return this.bim1;
    }
    alterarBim2(n) {
        if (n >= 0 && n <= 100) {
            this.bim2 = n;
            return true;
        }
        return false;
    }
    obterBim2() {
        return this.bim2;
    }
    alterarBim3(n) {
        if (n >= 0 && n <= 100) {
            this.bim3 = n;
            return true;
        }
        return false;
    }
    obterBim3() {
        return this.bim3;
    }
    alterarBim4(n) {
        if (n >= 0 && n <= 100) {
            this.bim4 = n;
            return true;
        }
        return false;
    }
    obterBim4() {
        return this.bim4;
    }
    calcularMédiaParcial() {
        return (this.bim1 * 2 + this.bim2 * 2 + this.bim3 * 3 + this.bim3 + this.bim4 * 3) / 10;
    }
    /** Média final da disciplina

    * caso o estudante obtenha a média parcial maior ou
    * igual a 60 a média final será a media parcial (mp).
    * Caso contrário, a média final será calculada pela formúla (mp + nav) / 2
    * @param nav - nota da avaliação
    * @return - a média final da disciplina.
    */
    calcularMédiaFinal(nav) {
        let;
        if (mp < 60) {
            return (mp + nav) / 2;
        }
        return mp;
    }
}
exports.Nota = Nota;
