export class Televisao {
    private volume: number;
    private canal: number;

    constructor() {
        this.volume = 0;
        this.canal = 0;
    }

    alterarVolume(volume: number) {
        if (volume >= 0 && volume <= 100) {
            this.volume = volume;
        }
    }

    obterVolume(): number {
        return this.volume;
    }

    alterarCanal(canal: number) {
        if (canal >= 0 && canal <= 800) {
            this.canal = canal;
        }
    }

    obterCanal(): number {
        return this.canal;
    }
}

export class ControleRemoto {
    private televisao: Televisao;

    constructor(televisao: Televisao) {
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

    consultarVolume(): number {
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

    trocarCanal(canal: number) {
        this.televisao.alterarCanal(canal);
    }

    consultarCanal(): number {
        return this.televisao.obterCanal();
    }
}
