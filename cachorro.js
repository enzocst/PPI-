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
var Cachorro = /** @class */ (function () {
    function Cachorro(nm, rc) {
        this.nome = nm;
        this.raça = rc;
        this.idade = 0;
    }
    return Cachorro;
}());
exports.Cachorro = Cachorro;
