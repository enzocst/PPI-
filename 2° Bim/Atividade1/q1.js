"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nm, categ, mrc, desc, prc, quant) {
        this.nome = nm;
        this.categoria = categ;
        this.marca = mrc;
        this.descricao = desc;
        this.preco = prc;
        this.quantidade = quant;
    }
}
exports.Produto = Produto;
