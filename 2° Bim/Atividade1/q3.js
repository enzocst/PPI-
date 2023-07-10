"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleRemoto = exports.Televisao = void 0;
class Televisao {
    constructor() {
        this.volume = 0;
        this.canal = 0;
    }
    alterarVolume(volume) {
        if (volume >= 0 && volume <= 100) {
            this.volume = volume;
        }
    }
    obterVolume() {
        return this.volume;
    }
    alterarCanal(canal) {
        if (canal >= 0 && canal <= 800) {
            this.canal = canal;
        }
    }
    obterCanal() {
        return this.canal;
    }
}
exports.Televisao = Televisao;
class ControleRemoto {
    constructor(televisao) {
        this.televisao = televisao;
    }
    aumentarVolume() {
        const volumeAtual = this.televisao.obterVolume();
        if (volumeAtual < 100) {
            this.televisao.alterarVolume(volumeAtual + 1);
        }
    }
    diminuirVolume() {
        const volumeAtual = this.televisao.obterVolume();
        if (volumeAtual > 0) {
            this.televisao.alterarVolume(volumeAtual - 1);
        }
    }
    consultarVolume() {
        return this.televisao.obterVolume();
    }
    aumentarCanal() {
        const canalAtual = this.televisao.obterCanal();
        if (canalAtual < 800) {
            this.televisao.alterarCanal(canalAtual + 1);
        }
    }
    diminuirCanal() {
        const canalAtual = this.televisao.obterCanal();
        if (canalAtual > 0) {
            this.televisao.alterarCanal(canalAtual - 1);
        }
    }
    trocarCanal(canal) {
        this.televisao.alterarCanal(canal);
    }
    consultarCanal() {
        return this.televisao.obterCanal();
    }
}
exports.ControleRemoto = ControleRemoto;
